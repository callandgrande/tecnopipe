<!-- src/routes/products/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    
    // Product categories
    const categories = [
      { id: 'pipes', name: 'Polypropylene Pipes' },
      { id: 'fittings', name: 'Fittings & Connectors' },
      { id: 'ventilation', name: 'STUDOR Ventilation Valves' },
      { id: 'training', name: 'Training & Support' }
    ];
    
    // Featured products
    const featuredProducts = [
      {
        id: 1,
        name: 'German PP-R Pipes',
        category: 'pipes',
        description: 'High-quality German-made polypropylene pipes for potable water systems',
        features: ['Corrosion resistant', 'Long service life', 'Non-toxic materials', 'Various diameters available']
      },
      {
        id: 2,
        name: 'STUDOR Mini-Vent',
        category: 'ventilation',
        description: 'Compact air admittance valve for single fixture venting applications',
        features: ['Space-saving design', 'Prevents sewer gas escape', 'Easy installation', 'Cost-effective solution']
      },
      {
        id: 3,
        name: 'PP-R Fusion Fittings',
        category: 'fittings',
        description: 'Premium polypropylene fittings designed for secure, leak-proof connections',
        features: ['Heat fusion technology', 'Seamless integration', 'High pressure resistance', 'Various configurations']
      }
    ];
    
    // Active category
    let activeCategory = 'all';
    
    // Filter products based on active category
    $: filteredProducts = activeCategory === 'all' 
      ? featuredProducts 
      : featuredProducts.filter(product => product.category === activeCategory);
      
    // Change active category
    function setActiveCategory(categoryId) {
      activeCategory = categoryId;
    }
    
    // Animation for page elements
    let pageLoaded = false;
    
    onMount(() => {
      setTimeout(() => {
        pageLoaded = true;
      }, 100);
    });
  </script>
  
  <!-- Page header with hero image -->
  <section class="relative bg-gray-900 py-24 md:py-32">
    <div class="absolute inset-0 z-0 opacity-30">
        <img 
        src="/images/products-hero.png" 
        alt="Industrial pipes" 
        class="h-full w-full object-cover" 
        on:error={handleImageError}
      />    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
    
    <div class="container relative z-10 mx-auto px-4 sm:px-6">
      <div class="max-w-3xl">
        <h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Our Products
        </h1>
        <p class="mb-6 text-lg text-gray-100 md:text-xl">
          Industry-leading German-made polypropylene pipes and fittings for potable water systems, complemented by STUDOR active ventilation valves and comprehensive training solutions.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#contact-form" class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800">
            Request Quote
          </a>
          <a href="#training" class="rounded-md border-2 border-white bg-transparent px-5 py-3 font-medium text-white transition-all hover:bg-white/10">
            Training Courses
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Main product showcase -->
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Quality statement -->
      <div class="mb-16 max-w-4xl">
        <h2 class="mb-4 text-2xl font-medium sm:text-3xl">ENGINEERED FOR EXCELLENCE</h2>
        <p class="text-gray-700">
          At TecnoPipe, we supply only the highest quality German-manufactured polypropylene piping systems and components. 
          Our products meet rigorous international standards and are designed for durability, safety, and environmental sustainability.
        </p>
      </div>
      
      <!-- Category filters -->
      <div class="mb-12">
        <div class="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          <button 
            class={`px-4 py-2 font-medium transition-colors ${activeCategory === 'all' ? 'text-blue-700' : 'text-gray-500 hover:text-gray-800'}`}
            on:click={() => setActiveCategory('all')}
          >
            All Products
          </button>
          
          {#each categories as category}
            <button 
              class={`px-4 py-2 font-medium transition-colors ${activeCategory === category.id ? 'text-blue-700' : 'text-gray-500 hover:text-gray-800'}`}
              on:click={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Product grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each filteredProducts as product}
          <div class={`product-card transform rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${pageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style="transition-delay: {product.id * 150}ms">
            <div class="mb-4 h-48 rounded bg-gray-100 flex items-center justify-center">
              <div class="text-gray-400">Product Image</div>
            </div>
            <h3 class="mb-2 text-xl font-medium">{product.name}</h3>
            <p class="mb-4 text-sm text-gray-600">{product.description}</p>
            <ul class="mb-6 space-y-1">
              {#each product.features as feature}
                <li class="flex items-start text-sm">
                  <span class="mr-2 text-blue-700">•</span>
                  {feature}
                </li>
              {/each}
            </ul>
            <a href="#contact-form" class="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
              Request Details →
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- German engineering highlight -->
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex flex-col items-center md:flex-row md:items-start md:space-x-12">
        <div class="mb-8 w-full md:mb-0 md:w-1/2">
          <div class="aspect-4/3 h-64 w-full rounded bg-gray-200 md:h-auto"></div>
        </div>
        
        <div class="w-full md:w-1/2">
          <h2 class="mb-4 text-2xl font-medium sm:text-3xl">GERMAN ENGINEERING EXCELLENCE</h2>
          <p class="mb-4 text-gray-700">
            Our polypropylene pipes and fittings are manufactured in Germany using advanced production techniques and stringent quality control processes. This ensures every component meets the highest standards of reliability and performance.
          </p>
          <p class="mb-6 text-gray-700">
            These premium piping systems are specifically designed for potable water applications, offering:
          </p>
          <ul class="mb-8 space-y-2">
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Superior durability with 50+ years of service life</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Corrosion and scale resistance for consistent water quality</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Heat fusion connections creating seamless, leak-free systems</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Environmental sustainability with recyclable materials</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Excellent thermal insulation properties</span>
            </li>
          </ul>
          <a href="#contact-form" class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800">
            Get Product Specifications
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <!-- STUDOR section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex flex-col items-center md:flex-row-reverse md:items-start md:space-x-reverse md:space-x-12">
        <div class="mb-8 w-full md:mb-0 md:w-1/2">
          <div class="aspect-4/3 h-64 w-full rounded bg-gray-200 md:h-auto"></div>
        </div>
        
        <div class="w-full md:w-1/2">
          <h2 class="mb-4 text-2xl font-medium sm:text-3xl">STUDOR ACTIVE VENTILATION VALVES</h2>
          <p class="mb-4 text-gray-700">
            As the authorized distributor of STUDOR ventilation solutions in Ecuador, we provide innovative air admittance valves that revolutionize plumbing ventilation systems.
          </p>
          <p class="mb-6 text-gray-700">
            STUDOR active ventilation valves offer significant advantages over traditional ventilation methods:
          </p>
          <ul class="mb-8 space-y-2">
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Eliminates the need for conventional roof penetrations</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Reduces plumbing system material costs by up to 40%</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Prevents sewer gas escape and maintains trap seals</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Simplifies installation in both new construction and renovations</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-700">→</span>
              <span>Features maintenance-free operation with long service life</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-4">
            <a href="#contact-form" class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800">
              Request STUDOR Catalog
            </a>
            <a href="#design-support" class="rounded-md border-2 border-gray-300 bg-transparent px-5 py-3 font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50">
              Design Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Training & Support -->
  <section id="training" class="bg-gray-800 py-16 text-white">
    <div class="container mx-auto px-4 sm:px-6">
      <h2 class="mb-8 text-center text-2xl font-medium sm:text-3xl md:mb-12">TRAINING & INSTALLATION SUPPORT</h2>
      
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Training card 1 -->
        <div class="rounded-lg bg-gray-700 p-6">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <span class="text-lg font-bold">1</span>
          </div>
          <h3 class="mb-2 text-xl font-medium">Installation Training</h3>
          <p class="mb-4 text-gray-300">
            Hands-on training for contractors and installers on proper pipe fusion techniques and system assembly.
          </p>
          <ul class="mb-4 space-y-2 text-sm text-gray-300">
            <li>• Fusion welding certification</li>
            <li>• Proper tool usage</li>
            <li>• Testing procedures</li>
          </ul>
        </div>
        
        <!-- Training card 2 -->
        <div class="rounded-lg bg-gray-700 p-6">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <span class="text-lg font-bold">2</span>
          </div>
          <h3 class="mb-2 text-xl font-medium">Design Support</h3>
          <p class="mb-4 text-gray-300">
            Expert consultation for engineers and architects on optimal system design and product selection.
          </p>
          <ul class="mb-4 space-y-2 text-sm text-gray-300">
            <li>• Technical specifications</li>
            <li>• System layout assistance</li>
            <li>• Material optimization</li>
          </ul>
        </div>
        
        <!-- Training card 3 -->
        <div class="rounded-lg bg-gray-700 p-6">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <span class="text-lg font-bold">3</span>
          </div>
          <h3 class="mb-2 text-xl font-medium">Ongoing Support</h3>
          <p class="mb-4 text-gray-300">
            Continuous technical support throughout your project lifecycle from our trained specialists.
          </p>
          <ul class="mb-4 space-y-2 text-sm text-gray-300">
            <li>• On-site troubleshooting</li>
            <li>• Maintenance recommendations</li>
            <li>• System upgrades</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="mb-6 mx-auto max-w-2xl text-gray-300">
          Our comprehensive training programs ensure proper installation and optimal performance of your piping systems. 
          Schedule a training session for your team today.
        </p>
        <a href="#contact-form" class="inline-block rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800">
          Schedule Training
        </a>
      </div>
    </div>
  </section>
  
  <!-- Contact Form -->
  <section id="contact-form" class="bg-white py-16">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="mx-auto max-w-3xl">
        <h2 class="mb-6 text-center text-2xl font-medium sm:text-3xl">REQUEST INFORMATION</h2>
        <p class="mb-8 text-center text-gray-600">
          Contact us for product specifications, pricing information, or to schedule a consultation for your next project.
        </p>
        
        <form class="space-y-6">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label for="company" class="mb-1 block text-sm font-medium text-gray-700">Company</label>
              <input type="text" id="company" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label for="phone" class="mb-1 block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
          </div>
          
          <div>
            <label for="interest" class="mb-1 block text-sm font-medium text-gray-700">I'm interested in</label>
            <select id="interest" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none">
              <option value="">Select an option</option>
              <option value="pp-pipes">Polypropylene Pipes</option>
              <option value="fittings">Fittings & Connectors</option>
              <option value="studor">STUDOR Ventilation Valves</option>
              <option value="training">Training & Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows="4" class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"></textarea>
          </div>
          
          <div class="flex justify-center">
            <button type="submit" class="rounded-md bg-blue-700 px-8 py-3 font-medium text-white transition-all hover:bg-blue-800">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Testimonials/Featured Projects -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4 sm:px-6">
      <h2 class="mb-10 text-center text-2xl font-medium sm:text-3xl">TRUSTED BY INDUSTRY LEADERS</h2>
      
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Testimonial/Project 1 -->
        <div class="rounded-lg bg-white p-6 shadow-sm">
          <p class="mb-4 text-gray-600">
            "TecnoPipe's German-made polypropylene pipes have significantly improved the reliability of our water systems. The installation training they provided was thorough and practical."
          </p>
          <div class="flex items-center">
            <div class="mr-4 h-12 w-12 rounded-full bg-gray-200"></div>
            <div>
              <h4 class="font-medium">Major Commercial Developer</h4>
              <p class="text-sm text-gray-500">Quito, Ecuador</p>
            </div>
          </div>
        </div>
        
        <!-- Testimonial/Project 2 -->
        <div class="rounded-lg bg-white p-6 shadow-sm">
          <p class="mb-4 text-gray-600">
            "The STUDOR ventilation valves recommended by TecnoPipe saved us considerable installation time and cost. Their technical support throughout the project was exceptional."
          </p>
          <div class="flex items-center">
            <div class="mr-4 h-12 w-12 rounded-full bg-gray-200"></div>
            <div>
              <h4 class="font-medium">Leading Residential Builder</h4>
              <p class="text-sm text-gray-500">Guayaquil, Ecuador</p>
            </div>
          </div>
        </div>
        
        <!-- Testimonial/Project 3 -->
        <div class="rounded-lg bg-white p-6 shadow-sm">
          <p class="mb-4 text-gray-600">
            "As a plumbing contractor, the training and certification we received from TecnoPipe has allowed us to expand our service offerings and deliver higher quality installations."
          </p>
          <div class="flex items-center">
            <div class="mr-4 h-12 w-12 rounded-full bg-gray-200"></div>
            <div>
              <h4 class="font-medium">Professional Installation Company</h4>
              <p class="text-sm text-gray-500">Cuenca, Ecuador</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="bg-blue-700 py-16 text-white">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-6 text-3xl font-bold sm:text-4xl">Ready to upgrade your piping systems?</h2>
        <p class="mb-8 text-lg">
          Contact us today to discuss how our premium products and expert support can benefit your next project.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/contact" class="rounded-md bg-white px-6 py-3 font-medium text-blue-700 transition-all hover:bg-gray-100">
            Contact Our Team
          </a>
          <a href="#contact-form" class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  </section>
