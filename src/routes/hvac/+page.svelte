<script>
	import { _ } from 'svelte-i18n';
	
	// HVAC services data
	// This data structure will be localized in the template
	const hvacServices = [
	  {
		title: "design",
		icon: "📐" // You can replace with actual icon components later
	  },
	  {
		title: "installation",
		icon: "🔧"
	  },
	  {
		title: "maintenance",
		icon: "⚙️"
	  }
	];
  
	// HVAC installation specialties
	const installationSpecialties = [
	  {
		name: "HVAC Applied to Hospitals",
		features: [
		  "Clean Room Technology", 
		  "Isolation Rooms", 
		  "Temperature/Humidity Control", 
		  "Air Quality Management"
		]
	  },
	  {
		name: "Mechanical Ventilation",
		features: [
		  "Indoor Air Quality Systems", 
		  "Industrial Ventilation", 
		  "Air Distribution Design", 
		  "Exhaust Solutions"
		]
	  },
	  {
		name: "Control and Automation",
		features: [
		  "Smart Building Integration", 
		  "BMS Systems", 
		  "Remote Monitoring", 
		  "Energy Management"
		]
	  },
	  {
		name: "Hydronic Systems",
		features: [
		  "Chilled Water Systems", 
		  "Hot Water Distribution", 
		  "Radiant Heating/Cooling", 
		  "Water-based HVAC"
		]
	  }
	];
  
	// Rest of your JavaScript...
  </script>
  
  <svelte:head>
	<title>HVAC Systems | TecnoPipe Solutions</title>
	<meta name="description" content="Professional HVAC design, installation and maintenance services from TecnoPipe. Quality equipment and reliable service for optimal comfort." />
  </svelte:head>
  
  <!-- Hero Section -->
  <section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
	  <div class="max-w-2xl pt-16">
		<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{$_('hvac.hero.title')}</h1>
		<p class="text-xl font-light text-gray-100">
		  {$_('hvac.hero.subtitle')}
		</p>
	  </div>
	</div>
  </section>
  
  <!-- Introduction Section -->
  <section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
	  <div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">{$_('hvac.intro.title')}</h2>
		
		<div class="mb-10 space-y-6 text-gray-700">
		  <p class="text-lg leading-relaxed">
			{$_('hvac.intro.description')}
		  </p>
		</div>
		
		<!-- HVAC System Image -->
		<div class="mb-12 h-64 w-full overflow-hidden rounded-lg bg-gray-200 md:h-80">
		  <div class="flex h-full w-full items-center justify-center text-gray-500">
			HVAC System Image Placeholder
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  <!-- Core Services Grid -->
  <section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
	  <h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">{$_('hvac.coreServices.title')}</h2>
	  
	  <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
		{#each hvacServices as service}
		  <div class="rounded-lg bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
			<div class="mb-6 text-4xl text-blue-700">{service.icon}</div>
			<h3 class="mb-4 text-2xl font-medium">{$_(`hvac.coreServices.${service.title}.title`)}</h3>
			<p class="text-gray-700">{$_(`hvac.coreServices.${service.title}.description`)}</p>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
  
  <!-- Continue with the rest of your HVAC page structure, using $_() for text content -->
  
  <!-- CTA Section -->
  <section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
	  <h2 class="mb-6 text-2xl font-medium md:text-3xl">{$_('hvac.cta.title')}</h2>
	  <p class="mx-auto mb-8 max-w-2xl text-lg">
		{$_('hvac.cta.description')}
	  </p>
	  <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a
		  href="/contact"
		  class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
		>
		  {$_('hvac.cta.button1')}
		</a>
		<a
		  href="tel:(+593) 98-966-0516"
		  class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
		>
		  {$_('hvac.cta.button2')} (+593) 98-966-0516
		</a>
	  </div>
	</div>
  </section>