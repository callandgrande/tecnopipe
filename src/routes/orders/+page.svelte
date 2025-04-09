<!-- src/routes/orders/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    
    // State variables
    let formStep = $state(1); // 1: Order Form, 2: Review Order, 3: Confirmation
    let loading = $state(false);
    let orderNumber = $state('');
    let documentType = $state('proforma'); // 'proforma', 'delivery', 'invoice'
    let orders = $state([]);
    let pdfBlob = $state(null);
    let showDocumentPreview = $state(false);
    let currentDocument = $state(null);
    
    // Form data
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
      total: 0,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    });
    
    // Products list (would be fetched from API in production)
    const products = [
      { id: 1, name: 'PVC Pipe (50mm)', price: 12.50 },
      { id: 2, name: 'Copper Pipe (15mm)', price: 18.75 },
      { id: 3, name: 'Steel Pipe (100mm)', price: 45.00 },
      { id: 4, name: 'Pipe Connector', price: 5.25 },
      { id: 5, name: 'Pressure Valve', price: 22.00 }
    ];
    
    // Load saved orders from localStorage on mount
    onMount(() => {
      const savedOrders = localStorage.getItem('tecnopipe_orders');
      if (savedOrders) {
        orders = JSON.parse(savedOrders);
      }
      
      // Initialize document template styles
      initDocumentStyles();
    });
    
    // Initialize document CSS
    function initDocumentStyles() {
      // Add document styles if not already present
      if (!document.getElementById('document-styles')) {
        const style = document.createElement('style');
        style.id = 'document-styles';
        style.textContent = `
          .document-preview {
            font-family: Arial, sans-serif;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            border: 1px solid #ddd;
            background-color: white;
            position: relative;
          }
          .document-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }
          .document-title {
            font-size: 24px;
            font-weight: bold;
            color: #1d4ed8;
            margin-bottom: 5px;
          }
          .document-logo {
            background-color: #f3f4f6;
            padding: 15px;
            text-align: center;
            width: 200px;
          }
          .document-meta {
            margin-bottom: 20px;
          }
          .document-meta-row {
            display: flex;
            margin-bottom: 5px;
          }
          .document-meta-label {
            font-weight: bold;
            width: 150px;
          }
          .document-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .document-table th {
            background-color: #f3f4f6;
            padding: 10px;
            text-align: left;
            border-bottom: 2px solid #ddd;
          }
          .document-table td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
          }
          .document-total {
            margin-top: 20px;
            margin-left: auto;
            width: 300px;
          }
          .document-total-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
          }
          .document-total-label {
            font-weight: bold;
          }
          .document-total-value {
            text-align: right;
          }
          .document-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .document-watermark {
            color: rgba(200, 200, 200, 0.3);
            font-size: 80px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            z-index: 0;
          }
          @media print {
            body * {
              visibility: hidden;
            }
            .document-preview, .document-preview * {
              visibility: visible;
            }
            .document-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              border: none;
            }
            .modal-close-button {
              display: none;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
    
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
    
    // Submit order
    async function submitOrder() {
      loading = true;
      
      try {
        // Generate order number
        orderNumber = 'TP-' + Math.floor(100000 + Math.random() * 900000);
        
        // Create order object with order number
        const newOrder = {
          ...orderData,
          id: orderNumber,
          date: new Date().toISOString().split('T')[0],
          status: 'pending'
        };
        
        // Add to orders array
        orders = [...orders, newOrder];
        
        // Save to localStorage
        localStorage.setItem('tecnopipe_orders', JSON.stringify(orders));
        
        // Move to confirmation step
        formStep = 3;
        
        // Automatically generate proforma invoice
        setTimeout(() => {
          generateDocument('proforma');
        }, 500);
        
      } catch (error) {
        console.error('Error submitting order:', error);
        alert('There was an error submitting your order. Please try again.');
      } finally {
        loading = false;
      }
    }
    
    // Process to next step
    function nextStep() {
      if (formStep === 1) {
        // Validate form
        if (!orderData.clientName || !orderData.clientEmail || !orderData.clientPhone || !orderData.clientAddress) {
          alert('Please fill in all required client information fields.');
          return;
        }
        
        // Validate items
        const invalidItems = orderData.items.filter(item => !item.product || item.quantity <= 0 || item.unitPrice <= 0);
        if (invalidItems.length > 0) {
          alert('Please fill in all product details with valid quantities and prices.');
          return;
        }
        
        formStep = 2; // Move to review order
      } else if (formStep === 2) {
        submitOrder(); // Submit order and move to confirmation
      }
    }
    
    // Go back to previous step
    function prevStep() {
      if (formStep === 2) {
        formStep = 1;
      }
    }
    
    // Generate a document (proforma, delivery note, or invoice)
    function generateDocument(type) {
      documentType = type;
      
      // Get the current order
      const currentOrder = orders.find(order => order.id === orderNumber);
      if (!currentOrder) {
        alert('Order not found');
        return;
      }
      
      // Set document title based on type
      let title = '';
      let watermark = '';
      
      switch(type) {
        case 'proforma':
          title = 'Proforma Invoice';
          watermark = 'PROFORMA';
          break;
        case 'delivery':
          title = 'Delivery Note';
          watermark = 'DELIVERY';
          break;
        case 'invoice':
          title = 'Invoice';
          watermark = '';
          break;
        default:
          title = 'Document';
      }
      
      // Generate document HTML
      currentDocument = {
        title,
        watermark,
        order: currentOrder,
        html: generateDocumentHTML(currentOrder, title, watermark)
      };
      
      // Show document preview
      showDocumentPreview = true;
    }
    
    // Generate document HTML
    function generateDocumentHTML(order, title, watermark) {
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date().toLocaleDateString('en-US', dateOptions);
      
      return `
        <div class="document-preview">
          ${watermark ? `<div class="document-watermark">${watermark}</div>` : ''}
          <div class="document-header">
            <div>
              <div class="document-title">${title}</div>
              <div>${order.id}</div>
            </div>
            <div class="document-logo">
              TECNOPIPE
            </div>
          </div>
          
          <div class="document-meta">
            <div class="document-meta-row">
              <div class="document-meta-label">Date:</div>
              <div>${formattedDate}</div>
            </div>
            <div class="document-meta-row">
              <div class="document-meta-label">Client:</div>
              <div>${order.clientName}</div>
            </div>
            <div class="document-meta-row">
              <div class="document-meta-label">Tax ID/RUC:</div>
              <div>${order.clientTaxId || 'Not provided'}</div>
            </div>
            <div class="document-meta-row">
              <div class="document-meta-label">Contact:</div>
              <div>${order.clientEmail} | ${order.clientPhone}</div>
            </div>
            <div class="document-meta-row">
              <div class="document-meta-label">Address:</div>
              <div>${order.clientAddress}</div>
            </div>
          </div>
          
          <table class="document-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(item => `
                <tr>
                  <td>${item.product}</td>
                  <td>${item.description}</td>
                  <td>${item.quantity}</td>
                  <td>${formatCurrency(item.unitPrice)}</td>
                  <td>${formatCurrency(item.total)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="document-total">
            <div class="document-total-row">
              <div class="document-total-label">Subtotal:</div>
              <div class="document-total-value">${formatCurrency(order.subtotal)}</div>
            </div>
            <div class="document-total-row">
              <div class="document-total-label">Tax (12%):</div>
              <div class="document-total-value">${formatCurrency(order.tax)}</div>
            </div>
            <div class="document-total-row" style="border-top: 1px solid #ddd; padding-top: 8px; margin-top: 8px;">
              <div class="document-total-label">Total:</div>
              <div class="document-total-value" style="font-weight: bold;">${formatCurrency(order.total)}</div>
            </div>
          </div>
          
          ${order.notes ? `
            <div style="margin-top: 30px;">
              <div style="font-weight: bold;">Notes:</div>
              <div>${order.notes}</div>
            </div>
          ` : ''}
          
          <div class="document-footer">
            <p>TecnoPipe | 123 Industry Drive, Manufacturing District, Quito, Ecuador | (+593) 99-733-1443</p>
            <p>Thank you for your business!</p>
          </div>
        </div>
      `;
    }
    
    // Print the current document
    function printDocument() {
      window.print();
    }
    
    // Download document as PDF (using browser print to PDF for simplicity)
    function downloadDocument() {
      printDocument();
    }
    
    // Close document preview
    function closeDocumentPreview() {
      showDocumentPreview = false;
    }
    
    // Reset form to place a new order
    function placeNewOrder() {
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
        total: 0,
        date: new Date().toISOString().split('T')[0],
        status: 'pending'
      };
    }
    
    // View order history
    function viewOrderHistory() {
      // Show order history in a modal or redirect to order history page
      showOrderHistoryModal = true;
    }
    
    // State for order history modal
    let showOrderHistoryModal = $state(false);
    let selectedOrder = $state(null);
    
    // View order details
    function viewOrderDetails(order) {
      selectedOrder = order;
      orderNumber = order.id;
      generateDocument('proforma');
      showOrderHistoryModal = false;
    }
    
    // Delete order from history
    function deleteOrder(orderId) {
      if (confirm('Are you sure you want to delete this order?')) {
        orders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('tecnopipe_orders', JSON.stringify(orders));
      }
    }
    
    // Format number as currency
    function formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value);
    }
  </script>
  
  <div class="pt-20">
    <!-- Page header with background effect -->
    <div class="bg-blue-700 py-12 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-80"></div>
      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">Orders</h1>
        <p class="text-lg text-blue-100 max-w-2xl">
          Place your order for TecnoPipe products and services. After submission, 
          you'll receive your proforma invoice immediately.
        </p>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="container mx-auto px-4 sm:px-6 py-10">
      {#if formStep === 1}
        <!-- Step 1: Order Form -->
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-medium text-gray-800">Place Your Order</h2>
              {#if orders.length > 0}
                <button 
                  type="button"
                  class="text-sm text-blue-700 hover:text-blue-800"
                  on:click={viewOrderHistory}
                >
                  View Order History ({orders.length})
                </button>
              {/if}
            </div>
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
            
            <!-- Order Notes -->
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
                disabled={loading}
              >
                {#if loading}
                  <span class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                {:else}
                  Submit Order
                {/if}
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
              <p class="text-xl font-bold text-blue-700 mt-2">{orderNumber}</p>
            </div>
            
            <!-- Document buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                type="button"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={() => generateDocument('proforma')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Proforma Invoice
              </button>
              
              <button 
                type="button"
                class="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={() => generateDocument('delivery')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Generate Delivery Note
              </button>
              
              <button 
                type="button"
                class="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={() => generateDocument('invoice')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Generate Invoice
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
                  on:click={placeNewOrder}
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
  
  <!-- Document Preview Modal -->
  {#if showDocumentPreview && currentDocument}
    <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        
        <!-- Modal panel -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              {currentDocument.title}
            </h3>
            <div class="flex space-x-2">
              <button 
                type="button"
                class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={printDocument}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
              <button 
                type="button"
                class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={downloadDocument}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              <button 
                type="button"
                class="modal-close-button inline-flex items-center justify-center p-1.5 border border-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                on:click={closeDocumentPreview}
              >
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="bg-white p-4 sm:p-6 max-h-screen overflow-y-auto">
            <!-- Document content rendered using the HTML string -->
            <div class="document-container">
              {@html currentDocument.html}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  
  <!-- Order History Modal -->
  {#if showOrderHistoryModal}
    <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        
        <!-- Modal panel -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Order History
            </h3>
            <button 
              type="button"
              class="inline-flex items-center justify-center p-1.5 border border-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              on:click={() => showOrderHistoryModal = false}
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="bg-white p-6 max-h-96 overflow-y-auto">
            {#if orders.length === 0}
              <div class="text-center py-6">
                <p class="text-gray-500">No orders found.</p>
              </div>
            {:else}
              <div class="space-y-4">
                {#each orders as order (order.id)}
                  <div class="border rounded-lg overflow-hidden">
                    <div class="bg-gray-50 px-4 py-2 flex justify-between items-center">
                      <div>
                        <span class="font-medium">{order.id}</span>
                        <span class="text-sm text-gray-500 ml-2">{order.date}</span>
                      </div>
                      <div>
                        <span class="px-2 py-1 text-xs rounded-full {order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}">
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="flex justify-between items-center">
                        <div>
                          <p class="font-medium">{order.clientName}</p>
                          <p class="text-sm text-gray-600">{formatCurrency(order.total)}</p>
                        </div>
                        <div class="flex space-x-2">
                          <button 
                            type="button"
                            class="text-sm text-blue-600 hover:text-blue-800"
                            on:click={() => viewOrderDetails(order)}
                          >
                            View
                          </button>
                          <button 
                            type="button"
                            class="text-sm text-red-600 hover:text-red-800"
                            on:click={() => deleteOrder(order.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              on:click={() => showOrderHistoryModal = false}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}