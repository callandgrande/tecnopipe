<!-- src/routes/orders/+page.svelte -->
<script>
  import { onMount, setContext } from 'svelte';
  
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
    clientTaxId: '',
    items: [
      { id: 1, product: '', description: '', quantity: 1, unitPrice: 0, total: 0 }
    ],
    notes: '',
    subtotal: 0,
    tax: 0,
    total: 0
  });
  
  // Products list - just for demo
  const products = [
    { id: 1, name: 'PVC Pipe (50mm)', price: 12.50 },
    { id: 2, name: 'Copper Pipe (15mm)', price: 18.75 },
    { id: 3, name: 'Steel Pipe (100mm)', price: 45.00 },
    { id: 4, name: 'Pipe Connector', price: 5.25 },
    { id: 5, name: 'Pressure Valve', price: 22.00 }
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
      const matchedProduct = products.find(p => p.name === value);
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
      orderData.id = 'TP-' + Math.floor(100000 + Math.random() * 900000);
      formStep = 3;
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
      clientTaxId: '',
      items: [
        { id: 1, product: '', description: '', quantity: 1, unitPrice: 0, total: 0 }
      ],
      notes: '',
      subtotal: 0,
      tax: 0,
      total: 0
    };
  }
</script>

<div class="pt-20">
  <!-- Hero section with company colors similar to homepage -->
  <div class="bg-blue-700 py-12 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-80"></div>
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Orders</h1>
      <p class="text-lg text-blue-100 max-w-2xl">
        Place your order for TecnoPipe products and services. Fill out the form below to get started.
      </p>
    </div>
  </div>
  
  <!-- Main content container -->
  <div class="container mx-auto px-4 sm:px-6 py-10">
    {#if formStep === 1}
      <!-- Step 1: Order Form -->
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 class="text-xl font-medium text-gray-800">Place Your Order</h2>
        </div>
        
        <div class="p-6">
          <!-- Client Information -->
          <h3 class="text-lg font-medium mb-4">Client Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label for="clientName" class="block text-sm font-medium text-gray-700 mb-1">Full Name / Company*</label>
              <input 
                type="text" 
                id="clientName" 
                bind:value={orderData.clientName} 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label for="clientTaxId" class="block text-sm font-medium text-gray-700 mb-1">Tax ID / RUC</label>
              <input 
                type="text" 
                id="clientTaxId" 
                bind:value={orderData.clientTaxId}
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label for="clientEmail" class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input 
                type="email" 
                id="clientEmail" 
                bind:value={orderData.clientEmail}
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label for="clientPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
              <input 
                type="tel" 
                id="clientPhone" 
                bind:value={orderData.clientPhone}
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div class="md:col-span-2">
              <label for="clientAddress" class="block text-sm font-medium text-gray-700 mb-1">Delivery Address*</label>
              <textarea 
                id="clientAddress" 
                bind:value={orderData.clientAddress}
                rows="2" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>
          
          <!-- Order Items -->
          <h3 class="text-lg font-medium mb-4">Order Items</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product*</th>
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity*</th>
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price*</th>
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {#each orderData.items as item, index}
                  <tr>
                    <td class="px-3 py-2">
                      <select 
                        class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                        class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={item.description}
                        on:input={(e) => updateItem(index, 'description', e.target.value)}
                        placeholder="Description"
                      />
                    </td>
                    <td class="px-3 py-2">
                      <input 
                        type="number" 
                        min="1"
                        class="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={item.quantity}
                        on:input={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                        required
                      />
                    </td>
                    <td class="px-3 py-2">
                      <input 
                        type="number" 
                        step="0.01"
                        min="0"
                        class="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={item.unitPrice}
                        on:input={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
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
              class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              on:click={addItem}
            >
              <span class="mr-1">+</span> Add Another Item
            </button>
          </div>
          
          <!-- Order Notes -->
          <div class="mb-6">
            <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea 
              id="notes" 
              bind:value={orderData.notes}
              rows="3" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Special instructions, requirements, or preferences..."
            ></textarea>
          </div>
          
          <!-- Order Summary -->
          <div class="border-t border-gray-200 pt-4 mb-6">
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
              class="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              on:click={nextStep}
            >
              Review Order
            </button>
          </div>
        </div>
      </div>
    {:else if formStep === 2}
      <!-- Step 2: Review Order -->
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 class="text-xl font-medium text-gray-800">Review Your Order</h2>
        </div>
        
        <div class="p-6">
          <!-- Client Information Summary -->
          <div class="mb-6">
            <h3 class="text-lg font-medium mb-3">Client Information</h3>
            <div class="bg-gray-50 rounded-md p-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-500">Name / Company</p>
                  <p class="font-medium">{orderData.clientName}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Tax ID / RUC</p>
                  <p class="font-medium">{orderData.clientTaxId || 'Not provided'}</p>
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
            <h3 class="text-lg font-medium mb-3">Order Items</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
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
              <h3 class="text-lg font-medium mb-3">Additional Notes</h3>
              <div class="bg-gray-50 rounded-md p-4">
                <p>{orderData.notes}</p>
              </div>
            </div>
          {/if}
          
          <!-- Order Summary -->
          <div class="mb-6">
            <h3 class="text-lg font-medium mb-3">Order Summary</h3>
            <div class="bg-gray-50 rounded-md p-4">
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
              class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              on:click={prevStep}
            >
              Back to Edit
            </button>
            <button 
              type="button"
              class="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              on:click={nextStep}
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    {:else if formStep === 3}
      <!-- Step 3: Order Confirmation -->
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-50 px-6 py-4 border-b border-gray-200">
          <h2 class="text-xl font-medium text-green-800">Order Confirmation</h2>
        </div>
        
        <div class="p-6">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h3>
            <p class="text-gray-600 max-w-md mx-auto">
              Your order has been received successfully. Your order number is:
            </p>
            <p class="text-xl font-bold text-blue-700 mt-2">{orderData.id}</p>
          </div>
          
          <!-- Document buttons (just for show in the demo) -->
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              type="button"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Proforma Invoice
            </button>
            
            <button 
              type="button"
              class="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
          
          <div class="border-t border-gray-200 pt-6">
            <div class="text-center">
              <p class="text-gray-600 mb-4">
                A confirmation email has been sent to <span class="font-medium">{orderData.clientEmail}</span>.
              </p>
              <button 
                type="button"
                class="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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