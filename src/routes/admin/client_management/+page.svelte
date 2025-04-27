<!-- admin/client_management/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';

	let clients = [];
	let selectedClient = null;
	let clientOrders = [];
	let loading = true;
	let errorMessage = '';

	// Fetch all clients on component mount
	onMount(async () => {
		try {
			loading = true;
			const { data, error } = await supabase.from('clients').select('*').order('name');

			if (error) throw error;
			clients = data;
		} catch (error) {
			errorMessage = error.message;
			console.error('Error fetching clients:', error);
		} finally {
			loading = false;
		}
	});

	// Fetch client orders when a client is selected
	async function selectClient(client) {
		try {
			selectedClient = client;
			loading = true;

			const { data, error } = await supabase.rpc('get_client_orders', {
				client_id_param: client.id
			});

			if (error) throw error;
			clientOrders = data;
		} catch (error) {
			errorMessage = error.message;
			console.error('Error fetching client orders:', error);
		} finally {
			loading = false;
		}
	}

	// Format date for display
	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	// Format currency for display
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold text-gray-800">Client Management</h1>

	{#if errorMessage}
		<div class="mb-4 rounded-md bg-red-100 p-4 text-red-700">
			<p>{errorMessage}</p>
		</div>
	{/if}

	<div class="grid gap-6 md:grid-cols-3">
		<!-- Client List -->
		<div class="md:col-span-1">
			<div class="rounded-md bg-white p-4 shadow">
				<h2 class="mb-4 text-xl font-semibold text-gray-700">Clients</h2>

				{#if loading && clients.length === 0}
					<p class="text-gray-500">Loading clients...</p>
				{:else if clients.length === 0}
					<p class="text-gray-500">No clients found.</p>
				{:else}
					<ul class="divide-y divide-gray-200">
						{#each clients as client}
							<li>
								<button
									class="w-full px-2 py-3 text-left hover:bg-gray-50 {selectedClient?.id ===
									client.id
										? 'bg-blue-50 font-medium text-blue-700'
										: 'text-gray-700'}"
									on:click={() => selectClient(client)}
								>
									{client.name}
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>

		<!-- Client Details and Orders -->
		<div class="md:col-span-2">
			{#if selectedClient}
				<div class="mb-6 rounded-md bg-white p-6 shadow">
					<h2 class="mb-4 text-xl font-semibold text-gray-700">Client Details</h2>

					<div class="grid gap-4 md:grid-cols-2">
						<div>
							<p class="text-sm text-gray-500">Name</p>
							<p class="font-medium">{selectedClient.name}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Email</p>
							<p class="font-medium">{selectedClient.email || 'N/A'}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Phone</p>
							<p class="font-medium">{selectedClient.phone || 'N/A'}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Address</p>
							<p class="font-medium">{selectedClient.address || 'N/A'}</p>
						</div>
					</div>
				</div>

				<div class="rounded-md bg-white p-6 shadow">
					<h2 class="mb-4 text-xl font-semibold text-gray-700">Order History</h2>

					{#if loading && clientOrders.length === 0}
						<p class="text-gray-500">Loading orders...</p>
					{:else if clientOrders.length === 0}
						<p class="text-gray-500">No orders found for this client.</p>
					{:else}
						<div class="space-y-6">
							{#each clientOrders as order}
								<div class="rounded-md border border-gray-200 p-4">
									<div class="mb-2 flex items-center justify-between">
										<h3 class="font-semibold text-gray-700">
											Order #{order.id} - {formatDate(order.order_date)}
										</h3>
										<span
											class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
										>
											{formatCurrency(order.total)}
										</span>
									</div>

									{#if order.notes}
										<p class="mb-3 text-sm text-gray-600">{order.notes}</p>
									{/if}

									<div class="mt-4">
										<h4 class="mb-2 text-sm font-medium text-gray-700">Items</h4>
										<div class="overflow-x-auto">
											<table class="min-w-full text-sm">
												<thead>
													<tr class="border-b">
														<th class="py-2 text-left font-medium text-gray-500">Product</th>
														<th class="py-2 text-right font-medium text-gray-500">Qty</th>
														<th class="py-2 text-right font-medium text-gray-500">Price</th>
														<th class="py-2 text-right font-medium text-gray-500">Total</th>
													</tr>
												</thead>
												<tbody>
													{#each order.order_items as item}
														<tr class="border-b border-gray-100">
															<td class="py-2">{item.product_name || 'Unknown Product'}</td>
															<td class="py-2 text-right">{item.quantity}</td>
															<td class="py-2 text-right">{formatCurrency(item.unit_price)}</td>
															<td class="py-2 text-right"
																>{formatCurrency(item.quantity * item.unit_price)}</td
															>
														</tr>
													{/each}
													<tr class="bg-gray-50">
														<td colspan="3" class="py-2 text-right font-medium">Subtotal:</td>
														<td class="py-2 text-right">{formatCurrency(order.subtotal)}</td>
													</tr>
													<tr class="bg-gray-50">
														<td colspan="3" class="py-2 text-right font-medium">Tax:</td>
														<td class="py-2 text-right">{formatCurrency(order.tax)}</td>
													</tr>
													<tr class="bg-gray-50">
														<td colspan="3" class="py-2 text-right font-medium">Total:</td>
														<td class="py-2 text-right font-bold">{formatCurrency(order.total)}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{:else}
				<div class="flex h-full items-center justify-center rounded-md bg-white p-10 shadow">
					<p class="text-lg text-gray-500">Select a client to view details and order history</p>
				</div>
			{/if}
		</div>
	</div>
</div>
