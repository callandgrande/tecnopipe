<!-- src/routes/hvac/+page.svelte -->
<script>
	// HVAC services data
	const hvacServices = [
		{
			title: "System Design",
			description: "Custom HVAC solutions designed specifically for your space and requirements",
			icon: "📐" // You can replace with actual icon components later
		},
		{
			title: "Installation",
			description: "Professional installation by certified technicians with minimal disruption",
			icon: "🔧"
		},
		{
			title: "Maintenance",
			description: "Regular service plans to ensure optimal performance and extend equipment life",
			icon: "⚙️"
		},
		{
			title: "Repairs",
			description: "Fast, reliable repairs to minimize downtime and restore comfort quickly",
			icon: "🛠️"
		},
		{
			title: "Energy Efficiency",
			description: "Solutions to improve efficiency and reduce operational costs",
			icon: "⚡"
		},
		{
			title: "Air Quality",
			description: "Advanced filtration and purification systems for healthier indoor environments",
			icon: "💨"
		}
	];

	// HVAC equipment types
	const equipmentTypes = [
		{
			name: "Commercial Systems",
			features: ["Rooftop Units", "VRF/VRV Systems", "Chillers", "Central Air Handlers"]
		},
		{
			name: "Residential Systems",
			features: ["Split Systems", "Ductless Mini-Splits", "Heat Pumps", "Smart Thermostats"]
		},
		{
			name: "Industrial Solutions",
			features: ["Process Cooling", "Computer Room AC", "Clean Room Systems", "Industrial Ventilation"]
		}
	];
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
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">HVAC Systems</h1>
			<p class="text-xl font-light text-gray-100">
				Advanced climate control solutions for comfort and efficiency
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">CLIMATE COMFORT EXPERTS</h2>
			
			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg leading-relaxed">
					We specialize in the design, installation, and maintenance of air conditioning systems, offering top-quality equipment and reliable service. From tailored solutions to professional after-sales support, we ensure optimal performance and comfort in every space.
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

<!-- Services Grid -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR HVAC SERVICES</h2>
		
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each hvacServices as service}
				<div class="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
					<div class="mb-4 text-3xl">{service.icon}</div>
					<h3 class="mb-3 text-xl font-medium">{service.title}</h3>
					<p class="text-gray-700">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Equipment Types -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">QUALITY EQUIPMENT</h2>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each equipmentTypes as equipment}
				<div class="rounded-lg border border-gray-200 bg-white p-6">
					<h3 class="mb-4 text-center text-xl font-medium">{equipment.name}</h3>
					<ul class="space-y-2">
						{#each equipment.features as feature}
							<li class="flex items-center">
								<span class="mr-2 text-blue-700">•</span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		
		<div class="mt-10 text-center">
			<p class="mx-auto mb-6 max-w-2xl text-gray-700">
				We partner with leading manufacturers to provide the highest quality HVAC equipment with industry-leading warranties and energy efficiency ratings.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">WHY CHOOSE OUR HVAC SOLUTIONS</h2>
		
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<!-- Left column -->
			<div>
				<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Energy Efficiency</h3>
					<p class="text-gray-700">
						Our systems are designed to maximize energy efficiency, reducing utility costs while minimizing environmental impact. We select equipment with high SEER ratings and implement smart control systems to optimize performance.
					</p>
				</div>
				
				<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Advanced Technology</h3>
					<p class="text-gray-700">
						We incorporate the latest HVAC innovations, including smart thermostats, zoning systems, and remote monitoring capabilities that give you greater control and convenience.
					</p>
				</div>
				
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Certified Expertise</h3>
					<p class="text-gray-700">
						Our technicians are fully certified and regularly trained on the latest equipment and techniques, ensuring proper installation and service that extends the life of your system.
					</p>
				</div>
			</div>
			
			<!-- Right column -->
			<div>
				<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Improved Air Quality</h3>
					<p class="text-gray-700">
						Beyond temperature control, our systems can improve indoor air quality with advanced filtration, humidity control, and ventilation solutions that create healthier living and working environments.
					</p>
				</div>
				
				<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Custom Solutions</h3>
					<p class="text-gray-700">
						We don't believe in one-size-fits-all. Our approach involves a thorough assessment of your space and requirements to design a system that perfectly meets your needs and budget.
					</p>
				</div>
				
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-medium">Reliable Support</h3>
					<p class="text-gray-700">
						With maintenance agreements and prompt service, we ensure your HVAC system continues to perform optimally year-round. Our team is always ready to assist with any issues that arise.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR APPROACH</h2>
		
		<div class="mx-auto max-w-4xl">
			<div class="relative">
				<!-- Process steps - linear timeline format -->
				<div class="mb-12 flex flex-col space-y-12 md:space-y-16">
					<!-- Step 1 -->
					<div class="flex">
						<div class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">1</div>
						<div>
							<h3 class="mb-2 text-xl font-medium">Consultation & Assessment</h3>
							<p class="text-gray-700">
								We begin with a thorough consultation to understand your needs and a detailed assessment of your space to identify the optimal HVAC solution.
							</p>
						</div>
					</div>
					
					<!-- Step 2 -->
					<div class="flex">
						<div class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">2</div>
						<div>
							<h3 class="mb-2 text-xl font-medium">Custom Design</h3>
							<p class="text-gray-700">
								Our engineers create a tailored system design that accounts for your space, requirements, and budget constraints while maximizing efficiency.
							</p>
						</div>
					</div>
					
					<!-- Step 3 -->
					<div class="flex">
						<div class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">3</div>
						<div>
							<h3 class="mb-2 text-xl font-medium">Professional Installation</h3>
							<p class="text-gray-700">
								Our certified technicians carefully install your system with minimal disruption to your home or business operations.
							</p>
						</div>
					</div>
					
					<!-- Step 4 -->
					<div class="flex">
						<div class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">4</div>
						<div>
							<h3 class="mb-2 text-xl font-medium">Testing & Optimization</h3>
							<p class="text-gray-700">
								We thoroughly test the system to ensure it meets our high standards and optimize settings for peak performance.
							</p>
						</div>
					</div>
					
					<!-- Step 5 -->
					<div class="flex">
						<div class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">5</div>
						<div>
							<h3 class="mb-2 text-xl font-medium">Ongoing Maintenance</h3>
							<p class="text-gray-700">
								We provide regular maintenance to ensure continued efficiency and extend the life of your investment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">WHAT OUR CLIENTS SAY</h2>
		
		<div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
			<!-- Testimonial 1 -->
			<div class="rounded-lg bg-white p-6 shadow-sm">
				<p class="mb-4 italic text-gray-700">
					"The TecnoPipe team designed and installed a complete HVAC system for our office building. The improvement in comfort and air quality has been remarkable, and our energy costs have decreased significantly."
				</p>
				<div class="flex items-center">
					<div class="h-10 w-10 rounded-full bg-gray-300"></div>
					<div class="ml-3">
						<p class="font-medium">Carlos Mendoza</p>
						<p class="text-sm text-gray-600">Office Building Manager</p>
					</div>
				</div>
			</div>
			
			<!-- Testimonial 2 -->
			<div class="rounded-lg bg-white p-6 shadow-sm">
				<p class="mb-4 italic text-gray-700">
					"We've been using TecnoPipe for our hotel's HVAC maintenance for three years now. Their responsiveness and technical expertise have been invaluable in ensuring our guests' comfort year-round."
				</p>
				<div class="flex items-center">
					<div class="h-10 w-10 rounded-full bg-gray-300"></div>
					<div class="ml-3">
						<p class="font-medium">Maria Gonzalez</p>
						<p class="text-sm text-gray-600">Hotel Operations Director</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready For a Better Climate Solution?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Contact us today for a consultation and discover how our HVAC expertise can improve comfort, air quality, and energy efficiency in your space.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Schedule a Consultation
			</a>
			<a
				href="tel:(+593) 98-966-0516"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Call (+593) 98-966-0516
			</a>
		</div>
	</div>
</section>