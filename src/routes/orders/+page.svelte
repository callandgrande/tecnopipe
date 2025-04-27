<!-- src/routes/orders/+page.svelte -->
<script>
	import { onMount, setContext } from 'svelte';
	import { supabase } from '$lib/supabase';

	// Tell the layout to use opaque header
	setContext('forceHeaderOpaque', true);

	// Basic form state
	let formStep = $state(1); // 1: Order Form, 2: Review Order, 3: Confirmation

	// Form data with simple defaults
	let orderData = $state({
		clientName: '',
		clientEmail: '',
		clientPhone: '',
		clientAddress: '',
		items: [{ id: 1, product: '', description: '', quantity: 1, unitPrice: 0, total: 0 }],
		notes: '',
		subtotal: 0,
		tax: 0,
		total: 0
	});

	// Products list - just for demo
	const products = [
		{ id: 1, name: 'PVC Pipe (50mm)', price: 12.5 },
		{ id: 2, name: 'Copper Pipe (15mm)', price: 18.75 },
		{ id: 3, name: 'Steel Pipe (100mm)', price: 45.0 },
		{ id: 4, name: 'Pipe Connector', price: 5.25 },
		{ id: 5, name: 'Pressure Valve', price: 22.0 }
	];

	// Add new item to order
	function addItem() {
		const newId = orderData.items.length + 1;
		orderData.items = [
			...orderData.items,
			{ id: newId, product: '', description: '', quantity: 1, unitPrice: 0, total: 0 }
		];
		calculateTotals();
	}

	// Remove item from order
	function removeItem(index) {
		orderData.items = orderData.items.filter((_, i) => i !== index);
		calculateTotals();
	}

	// Update item details and calculate totals
	function updateItem(index, field, value) {
		orderData.items[index][field] = value;

		// When product changes, update price if it matches a known product
		if (field === 'product') {
			const matchedProduct = products.find((p) => p.name === value);
			if (matchedProduct) {
				orderData.items[index].unitPrice = matchedProduct.price;
			}
		}

		// Calculate the total for this line item
		orderData.items[index].total =
			orderData.items[index].quantity * orderData.items[index].unitPrice;

		calculateTotals();
	}

	// Calculate subtotal, tax, and total
	function calculateTotals() {
		orderData.subtotal = orderData.items.reduce((sum, item) => sum + item.total, 0);
		orderData.tax = orderData.subtotal * 0.12; // 12% tax rate
		orderData.total = orderData.subtotal + orderData.tax;
	}

	// Format currency for display
	function formatCurrency(value) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(value);
	}

	// Demo functions for navigation
	function nextStep() {
		// Simple validation for demo
		if (formStep === 1) {
			if (!orderData.clientName || !orderData.clientEmail) {
				alert('Please fill in client name and email.');
				return;
			}
			formStep = 2;
		} else if (formStep === 2) {
			// Generate demo order ID
			submitOrder();
			orderData.id = 'TP-' + Math.floor(100000 + Math.random() * 900000);
			formStep = 3;
		}
	}

	async function submitOrder() {
		console.log(orderData);
		console.log(orderData.items);

		try {
			const { data: existingClient, error: clientCheckError } = await supabase
				.from('clients')
				.select('id')
				.eq('email', orderData.clientEmail)
				.single();

			let clientId;

			if (clientCheckError && !existingClient) {
				// Client doesn't exist, create new client
				const { data: newClient, error: clientInsertError } = await supabase
					.from('clients')
					.insert({
						name: orderData.clientName,
						email: orderData.clientEmail,
						phone: orderData.clientPhone,
						address: orderData.clientAddress
					})
					.select()
					.single();

				if (clientInsertError) throw clientInsertError;
				clientId = newClient.id;
			} else {
				// Client exists, use existing ID
				clientId = existingClient.id;
			}

			// Start a Supabase transaction
			const { data: order, error: orderError } = await supabase
				.from('orders')
				.insert({
					client_id: clientId,
					subtotal: orderData.subtotal,
					tax: orderData.tax,
					total: orderData.total,
					notes: orderData.notes || null
				})
				.select()
				.single();

			if (orderError) throw orderError;

			// Prepare order items
			const orderItems = orderData.items.map((item) => ({
				order_id: order.id,
				product_id: item.id,
				quantity: item.quantity,
				unit_price: item.unitPrice,
				description: item.description || null
			}));

			// Insert order items
			const { data: items, error: itemsError } = await supabase
				.from('order_items')
				.insert(orderItems);

			if (itemsError) throw itemsError;

			console.log(`Order #${order.id} created successfully with ${orderData.items.length} items`);
		} catch (error) {
			console.error('Error submitting order:', error);
		}
	}

	function prevStep() {
		if (formStep > 1) formStep--;
	}

	function resetForm() {
		formStep = 1;
		orderData = {
			clientName: '',
			clientEmail: '',
			clientPhone: '',
			clientAddress: '',
			items: [{ id: 1, product: '', description: '', quantity: 1, unitPrice: 0, total: 0 }],
			notes: '',
			subtotal: 0,
			tax: 0,
			total: 0
		};
	}
</script>

<div class="pt-20">
	<!-- Hero section with company colors similar to homepage -->
	<div class="relative overflow-hidden bg-blue-700 py-12 text-white">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-80"></div>
		<div class="relative z-10 container mx-auto px-4 sm:px-6">
			<h1 class="mb-4 text-3xl font-bold sm:text-4xl">Orders</h1>
			<p class="max-w-2xl text-lg text-blue-100">
				Place your order for TecnoPipe products and services. Fill out the form below to get
				started.
			</p>
		</div>
	</div>

	<!-- Main content container -->
	<div class="container mx-auto px-4 py-10 sm:px-6">
		{#if formStep === 1}
			<!-- Step 1: Order Form -->
			<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<h2 class="text-xl font-medium text-gray-800">Place Your Order</h2>
				</div>

				<div class="p-6">
					<!-- Client Information -->
					<h3 class="mb-4 text-lg font-medium">Client Information</h3>
					<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="md:col-span-2">
							<label for="clientName" class="mb-1 block text-sm font-medium text-gray-700"
								>Full Name / Company*</label
							>
							<input
								type="text"
								id="clientName"
								bind:value={orderData.clientName}
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								required
							/>
						</div>

						<div>
							<label for="clientEmail" class="mb-1 block text-sm font-medium text-gray-700"
								>Email*</label
							>
							<input
								type="email"
								id="clientEmail"
								bind:value={orderData.clientEmail}
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								required
							/>
						</div>

						<div>
							<label for="clientPhone" class="mb-1 block text-sm font-medium text-gray-700"
								>Phone*</label
							>
							<input
								type="tel"
								id="clientPhone"
								bind:value={orderData.clientPhone}
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								required
							/>
						</div>

						<div class="md:col-span-2">
							<label for="clientAddress" class="mb-1 block text-sm font-medium text-gray-700"
								>Delivery Address*</label
							>
							<textarea
								id="clientAddress"
								bind:value={orderData.clientAddress}
								rows="2"
								class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								required
							></textarea>
						</div>
					</div>

					<!-- Order Items -->
					<h3 class="mb-4 text-lg font-medium">Order Items</h3>
					<div class="mb-6 overflow-x-auto">
						<table class="min-w-full divide-y divide-gray-200">
							<thead>
								<tr class="bg-gray-50">
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
										>Product*</th
									>
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
										>Description</th
									>
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
										>Quantity*</th
									>
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
										>Unit Price*</th
									>
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
										>Total</th
									>
									<th
										class="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									></th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								{#each orderData.items as item, index}
									<tr>
										<td class="px-3 py-2">
											<select
												class="w-full rounded-md border border-gray-300 px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none"
												value={item.product}
												on:change={(e) => updateItem(index, 'product', e.target.value)}
												required
											>
												<option value="">Select product</option>
												{#each products as product}
													<option value={product.name}>{product.name}</option>
												{/each}
												<option value="Custom Item">Custom Item</option>
											</select>
										</td>
										<td class="px-3 py-2">
											<input
												type="text"
												class="w-full rounded-md border border-gray-300 px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none"
												value={item.description}
												on:input={(e) => updateItem(index, 'description', e.target.value)}
												placeholder="Description"
											/>
										</td>
										<td class="px-3 py-2">
											<input
												type="number"
												min="1"
												class="w-20 rounded-md border border-gray-300 px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none"
												value={item.quantity}
												on:input={(e) =>
													updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
												required
											/>
										</td>
										<td class="px-3 py-2">
											<input
												type="number"
												step="0.01"
												min="0"
												class="w-24 rounded-md border border-gray-300 px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none"
												value={item.unitPrice}
												on:input={(e) =>
													updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
												required
											/>
										</td>
										<td class="px-3 py-2 font-medium">
											{formatCurrency(item.total)}
										</td>
										<td class="px-3 py-2 text-right">
											{#if orderData.items.length > 1}
												<button
													type="button"
													class="text-red-600 hover:text-red-800"
													on:click={() => removeItem(index)}
												>
													Remove
												</button>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<div class="mb-6">
						<button
							type="button"
							class="flex items-center font-medium text-blue-600 hover:text-blue-800"
							on:click={addItem}
						>
							<span class="mr-1">+</span> Add Another Item
						</button>
					</div>

					<!-- Order Notes -->
					<div class="mb-6">
						<label for="notes" class="mb-1 block text-sm font-medium text-gray-700"
							>Additional Notes</label
						>
						<textarea
							id="notes"
							bind:value={orderData.notes}
							rows="3"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Special instructions, requirements, or preferences..."
						></textarea>
					</div>

					<!-- Order Summary -->
					<div class="mb-6 border-t border-gray-200 pt-4">
						<div class="flex justify-end">
							<div class="w-full md:w-1/3">
								<div class="flex justify-between py-2">
									<span class="text-gray-600">Subtotal:</span>
									<span class="font-medium">{formatCurrency(orderData.subtotal)}</span>
								</div>
								<div class="flex justify-between py-2">
									<span class="text-gray-600">Tax (12%):</span>
									<span class="font-medium">{formatCurrency(orderData.tax)}</span>
								</div>
								<div class="flex justify-between py-2 text-lg font-bold">
									<span>Total:</span>
									<span>{formatCurrency(orderData.total)}</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="flex justify-end">
						<button
							type="button"
							class="rounded-md bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							on:click={nextStep}
						>
							Review Order
						</button>
					</div>
				</div>
			</div>
		{:else if formStep === 2}
			<!-- Step 2: Review Order -->
			<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<h2 class="text-xl font-medium text-gray-800">Review Your Order</h2>
				</div>

				<div class="p-6">
					<!-- Client Information Summary -->
					<div class="mb-6">
						<h3 class="mb-3 text-lg font-medium">Client Information</h3>
						<div class="rounded-md bg-gray-50 p-4">
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div>
									<p class="text-sm text-gray-500">Name / Company</p>
									<p class="font-medium">{orderData.clientName}</p>
								</div>
								<div>
									<p class="text-sm text-gray-500">Email</p>
									<p class="font-medium">{orderData.clientEmail}</p>
								</div>
								<div>
									<p class="text-sm text-gray-500">Phone</p>
									<p class="font-medium">{orderData.clientPhone}</p>
								</div>
								<div class="md:col-span-2">
									<p class="text-sm text-gray-500">Delivery Address</p>
									<p class="font-medium">{orderData.clientAddress}</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Order Items Summary -->
					<div class="mb-6">
						<h3 class="mb-3 text-lg font-medium">Order Items</h3>
						<div class="overflow-x-auto">
							<table class="min-w-full divide-y divide-gray-200">
								<thead>
									<tr class="bg-gray-50">
										<th
											class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
											>Product</th
										>
										<th
											class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
											>Description</th
										>
										<th
											class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
											>Quantity</th
										>
										<th
											class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
											>Unit Price</th
										>
										<th
											class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
											>Total</th
										>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 bg-white">
									{#each orderData.items as item}
										<tr>
											<td class="px-4 py-3 text-sm">{item.product}</td>
											<td class="px-4 py-3 text-sm">{item.description}</td>
											<td class="px-4 py-3 text-sm">{item.quantity}</td>
											<td class="px-4 py-3 text-sm">{formatCurrency(item.unitPrice)}</td>
											<td class="px-4 py-3 text-sm font-medium">{formatCurrency(item.total)}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>

					<!-- Order Notes if any -->
					{#if orderData.notes}
						<div class="mb-6">
							<h3 class="mb-3 text-lg font-medium">Additional Notes</h3>
							<div class="rounded-md bg-gray-50 p-4">
								<p>{orderData.notes}</p>
							</div>
						</div>
					{/if}

					<!-- Order Summary -->
					<div class="mb-6">
						<h3 class="mb-3 text-lg font-medium">Order Summary</h3>
						<div class="rounded-md bg-gray-50 p-4">
							<div class="flex justify-end">
								<div class="w-full md:w-1/3">
									<div class="flex justify-between py-2">
										<span class="text-gray-600">Subtotal:</span>
										<span class="font-medium">{formatCurrency(orderData.subtotal)}</span>
									</div>
									<div class="flex justify-between py-2">
										<span class="text-gray-600">Tax (12%):</span>
										<span class="font-medium">{formatCurrency(orderData.tax)}</span>
									</div>
									<div class="flex justify-between py-2 text-lg font-bold">
										<span>Total:</span>
										<span>{formatCurrency(orderData.total)}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="flex justify-between">
						<button
							type="button"
							class="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							on:click={prevStep}
						>
							Back to Edit
						</button>
						<button
							type="button"
							class="rounded-md bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							on:click={nextStep}
						>
							Submit Order
						</button>
					</div>
				</div>
			</div>
		{:else if formStep === 3}
			<!-- Step 3: Order Confirmation -->
			<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
				<div class="border-b border-gray-200 bg-green-50 px-6 py-4">
					<h2 class="text-xl font-medium text-green-800">Order Confirmation</h2>
				</div>

				<div class="p-6">
					<div class="mb-8 text-center">
						<div
							class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<h3 class="mb-2 text-2xl font-bold text-gray-800">Thank You for Your Order!</h3>
						<p class="mx-auto max-w-md text-gray-600">
							Your order has been received successfully. Your order number is:
						</p>
						<p class="mt-2 text-xl font-bold text-blue-700">{orderData.id}</p>
					</div>

					<!-- Document buttons (just for show in the demo) -->
					<div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
						<button
							type="button"
							class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							View Proforma Invoice
						</button>

						<button
							type="button"
							class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							Download PDF
						</button>
					</div>

					<div class="border-t border-gray-200 pt-6">
						<div class="text-center">
							<p class="mb-4 text-gray-600">
								A confirmation email has been sent to <span class="font-medium"
									>{orderData.clientEmail}</span
								>.
							</p>
							<button
								type="button"
								class="rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
								on:click={resetForm}
							>
								Place Another Order
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
