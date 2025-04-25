<!-- src/routes/products/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Product categories
  const categories = [
    { id: 'pipes', name: 'Polypropylene Pipes' },
    { id: 'fittings', name: 'Fittings & Connectors' },
    { id: 'ventilation', name: 'STUDOR Ventilation Valves' },
    { id: 'training', name: 'Training & Tutorials' }
  ];
  
  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'German PP-R Pipes',
      category: 'pipes',
      image: '/images/ppr.jpg',
      description: 'High-quality German-made polypropylene pipes for potable water systems',
      features: ['Corrosion resistant', 'Long service life', 'Non-toxic materials', 'Various diameters available']
    },
    {
      id: 2,
      name: 'STUDOR Mini-Vent',
      category: 'ventilation',
      image: 'images/STUDOR-Mini-Vent.png',
      description: 'Compact air admittance valve for single fixture venting applications',
      features: ['Space-saving design', 'Prevents sewer gas escape', 'Easy installation', 'Cost-effective solution']
    },
    {
      id: 3,
      name: 'PP-R Fusion Fittings',
      category: 'fittings',
      image: 'images/fusion.png',
      description: 'Premium polypropylene fittings designed for secure, leak-proof connections',
      features: ['Heat fusion technology', 'Seamless integration', 'High pressure resistance', 'Various configurations']
    },
    {
      id: 4,
      name: 'PP-R Pipe Installation Tutorial',
      category: 'training',
      videoId: 'hFw2Tr_bwdc',
      description: 'Learn the proper installation techniques for PP-R piping systems from our expert technicians',
      features: ['Step-by-step guidance', 'Professional techniques', 'Tool requirements', 'Safety procedures']
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

  // Add the missing handleImageError function
  function handleImageError(e) {
    // Fallback to a placeholder or hide the image
    e.target.src = '/images/products-hero.png'; // You can create a placeholder image
    // Alternatively, you could add a class to style the broken image
    e.target.classList.add('image-error');
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
        Polypropylene pipes and fittings of German manufacturing. INDUSTRY LEADERS for drinking water systems. Studor active ventilation valves..
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
          {#if product.videoId}
            <!-- Video content -->
            <div class="mb-4 h-48 rounded bg-gray-100 overflow-hidden relative">
              <iframe 
                src="https://www.youtube.com/embed/{product.videoId}" 
                title={product.name}
                class="h-full w-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          {:else}
            <!-- Image content -->
            <div class="mb-4 h-48 rounded bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                class="h-full w-full object-contain"
                on:error={handleImageError}
              />
            </div>
          {/if}
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
            {product.videoId ? 'Access Full Training' : 'Request Details'} →
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
        <div class="aspect-4/3 h-64 w-full rounded bg-gray-200 overflow-hidden md:h-auto">
          <img 
            src="images/ppr-tecnopipe.png" 
            alt="German manufactured PP-R pipes"
            class="h-full w-full object-cover"
            on:error={handleImageError}
          />
        </div>
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
        <div class="flex flex-wrap gap-4">
          <a 
            href="https://www.polymelt.com/downloads/#_" 
            class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Product Specifications
          </a>
          <a 
            href="https://www.polymelt.com/about-polymelt/company/sustainability/" 
            class="rounded-md border-2 border-green-500 bg-transparent px-5 py-3 font-medium text-green-700 transition-all hover:bg-green-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Product Sustainability
          </a>
          <a 
            href="https://www.polymelt.com/wp-content/uploads/2024/08/POLY-23_038_POLYMELT_Sustainable_green_building_paper.pdf" 
            class="rounded-md border-2 border-blue-300 bg-transparent px-5 py-3 font-medium text-blue-600 transition-all hover:bg-blue-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polymelt
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STUDOR section -->
<section class="bg-white py-16">
  <div class="container mx-auto px-4 sm:px-6">
    <div class="flex flex-col items-center md:flex-row-reverse md:items-start md:space-x-reverse md:space-x-12">
      <div class="mb-8 w-full md:mb-0 md:w-1/2">
        <div class="aspect-4/3 h-64 w-full rounded bg-gray-200 overflow-hidden md:h-auto">
          <img 
            src="images/STUDOR-Mini-Vent.png" 
            alt="STUDOR Mini-Vent valve"
            class="h-full w-full object-contain"
            on:error={handleImageError}
          />
        </div>
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

<!-- Training & Tutorials Section -->
<section id="training" class="bg-gray-50 py-16">
  <div class="container mx-auto px-4 sm:px-6">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-medium">Training & Tutorials</h2>
      <p class="mx-auto max-w-2xl text-gray-700">
        Access our comprehensive library of installation guides, best practices, and technical training videos to ensure optimal performance of your piping systems.
      </p>
    </div>
    
    <div class="mx-auto max-w-4xl">
      <!-- This div ensures proper aspect ratio -->
      <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-8">
        <iframe 
          src="https://www.youtube.com/embed/hFw2Tr_bwdc" 
          title="PP-R Pipe Installation Tutorial"
          class="absolute top-0 left-0 w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      
      <div class="mt-6">
        <h3 class="mb-2 text-xl font-medium">PP-R Pipe Installation Tutorial</h3>
        <p class="text-gray-700">
          This comprehensive tutorial demonstrates the proper techniques for installing PP-R piping systems, including heat fusion joining methods, support requirements, and testing procedures.
        </p>
      </div>
    </div>
  </div>
</section>