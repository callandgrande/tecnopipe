<!-- src/routes/hvac/+page.svelte -->
<script>
	// Main service categories
	const mainServices = {
		mechanicVentilation: {
			title: "Mechanic Ventilation",
			subtitle: "Advanced air movement and quality solutions",
			subsections: [
				{
					name: "JETFAN",
					description: "High-performance jet fans for parking garages and tunnels",
					features: ["Tunnel ventilation", "Parking garage systems", "Emergency smoke control", "Energy efficient operation"]
				},
				{
					name: "Staircase Pressurization",
					description: "Fire safety pressurization systems for stairwells",
					features: ["Fire safety compliance", "Smoke control systems", "Emergency egress protection", "Code compliant design"]
				}
			]
		},
		airConditioner: {
			title: "Air Conditioner",
			subtitle: "Complete cooling solutions and services",
			subsections: [
				{
					name: "Design",
					description: "Custom air conditioning system engineering",
					features: ["Load calculations", "System sizing", "Energy modeling", "Custom specifications"]
				},
				{
					name: "Installation",
					description: "Professional AC installation services",
					features: ["Certified technicians", "Quality installation", "Code compliance", "Warranty protection"]
				},
				{
					name: "Maintenance",
					description: "Comprehensive AC maintenance programs",
					features: ["Preventive maintenance", "Emergency repairs", "Performance optimization", "Extended equipment life"]
				}
			]
		}
	};

	// Secondary service sections
	const secondaryServices = [
		{
			title: "Hydronic System",
			subtitle: "Water-based heating and cooling solutions",
			description: "Advanced hydronic systems offer superior efficiency and comfort through water-based heating and cooling. Our solutions range from chilled beams to radiant floors, providing even temperatures and silent operation for various applications.",
			brands: [
				{
					name: "Mechanicals",
					description: "High-quality mechanical components for hydronic systems",
					specialties: ["Pumps & circulators", "Heat exchangers", "Control valves", "System components"]
				},
				{
					name: "ECOSAN",
					description: "Sustainable hydronic heating and cooling systems", 
					specialties: ["Eco-friendly solutions", "Energy recovery", "Sustainable design", "Green technology"]
				}
			]
		},
		{
			title: "Valves",
			subtitle: "Premium valve solutions for HVAC systems",
			description: "Professional-grade valves are essential for proper HVAC system operation. We partner with industry-leading manufacturers to provide reliable, long-lasting valve solutions for all applications.",
			brands: [
				{
					name: "Pettinatoli",
					description: "Italian excellence in valve manufacturing",
					specialties: ["Ball valves", "Control valves", "Safety valves", "Specialty applications"]
				}
			]
		},
		{
			title: "Equipment",
			subtitle: "Leading HVAC equipment manufacturers",
			description: "We represent the world's most trusted HVAC equipment manufacturers, offering comprehensive solutions from residential to large commercial and industrial applications.",
			brands: [
				{
					name: "Trane",
					description: "Industry-leading HVAC equipment and solutions",
					specialties: ["Commercial HVAC", "Industrial systems", "Energy efficiency", "Reliable performance"]
				},
				{
					name: "Mitsubishi",
					description: "Advanced air conditioning and heat pump technology",
					specialties: ["VRF systems", "Split systems", "Heat pumps", "Inverter technology"]
				}
			]
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
					We specialize in comprehensive HVAC solutions, offering top-quality equipment from leading manufacturers and reliable service across all applications. From mechanical ventilation and air conditioning to specialized hydronic systems and premium components, we ensure optimal performance and comfort in every space.
				</p>
			</div>
			
			<!-- Main HVAC Image -->
			<div class="mb-12 overflow-hidden rounded-lg shadow-lg">
				<div class="h-64 w-full bg-gray-200 md:h-80">
					<div class="flex h-full w-full items-center justify-center text-gray-500">
						Main HVAC Systems Overview Image
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mechanic Ventilation Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="rounded-lg bg-white p-8 shadow-md">
			<h2 class="mb-8 text-center text-2xl font-medium text-blue-700 md:text-3xl">MECHANIC VENTILATION</h2>
			
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
				<div>
					<p class="mb-6 text-lg text-gray-700">
						Our mechanical ventilation solutions ensure proper air exchange, removing contaminants and providing fresh air throughout your facility. From impulse ventilation to specialized pressurization systems, we design and install solutions that improve comfort, safety, and health.
					</p>
					
					<div class="space-y-4">
						{#each mainServices.mechanicVentilation.subsections as subsection}
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">{subsection.name}</h4>
								<p class="mb-3 text-gray-700">{subsection.description}</p>
								<div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
									{#each subsection.features as feature}
										<div class="flex items-center">
											<span class="mr-2 text-blue-700">•</span>
											<span class="text-sm text-gray-700">{feature}</span>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
				
				<div class="flex items-center justify-center">
					<div class="h-80 w-full overflow-hidden rounded-lg bg-gray-200">
						<div class="flex h-full w-full items-center justify-center text-gray-500">
							Mechanical Ventilation Systems Image
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Air Conditioner Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="rounded-lg bg-white p-8 shadow-md">
			<h2 class="mb-8 text-center text-2xl font-medium text-blue-700 md:text-3xl">AIR CONDITIONER</h2>
			
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
				<div class="flex items-center justify-center md:order-2">
					<div class="h-80 w-full overflow-hidden rounded-lg bg-gray-200">
						<div class="flex h-full w-full items-center justify-center text-gray-500">
							Air Conditioning Systems Image
						</div>
					</div>
				</div>
				
				<div class="md:order-1">
					<p class="mb-6 text-lg text-gray-700">
						Complete cooling solutions and services for residential, commercial, and industrial applications. Our team provides end-to-end air conditioning services from initial design through ongoing maintenance, ensuring optimal comfort and efficiency.
					</p>
					
					<div class="space-y-4">
						{#each mainServices.airConditioner.subsections as subsection}
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">{subsection.name}</h4>
								<p class="mb-3 text-gray-700">{subsection.description}</p>
								<div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
									{#each subsection.features as feature}
										<div class="flex items-center">
											<span class="mr-2 text-blue-700">•</span>
											<span class="text-sm text-gray-700">{feature}</span>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Secondary Services Sections -->
{#each secondaryServices as service, index}
	<section class="{index % 2 === 0 ? 'bg-gray-100' : ''} py-12 md:py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h2 class="mb-8 text-center text-2xl font-medium text-blue-700 md:text-3xl">{service.title}</h2>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div class="{index % 2 === 1 ? 'md:order-2' : ''}">
						<p class="mb-6 text-lg text-gray-700">
							{service.description}
						</p>
						
						<div class="space-y-4">
							{#each service.brands as brand}
								<div class="rounded-lg bg-blue-50 p-4">
									<h4 class="mb-2 font-medium text-blue-800">{brand.name}</h4>
									<p class="mb-3 text-gray-700">{brand.description}</p>
									<div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
										{#each brand.specialties as specialty}
											<div class="flex items-center">
												<span class="mr-2 text-blue-700">✓</span>
												<span class="text-sm text-gray-700">{specialty}</span>
											</div>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
					
					<div class="flex items-center justify-center {index % 2 === 1 ? 'md:order-1' : ''}">
						<div class="h-80 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								{service.title} Systems Image
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- JETFAN Detailed Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="rounded-lg bg-white p-8 shadow-md">
			<h2 class="mb-8 text-center text-2xl font-medium text-blue-700 md:text-3xl">JETFAN TECHNOLOGY</h2>
			
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
				<div>
					<p class="mb-6 text-lg text-gray-700">
						JETFAN systems represent the cutting edge of impulse ventilation technology, providing efficient air movement in large spaces like parking garages, tunnels, and industrial facilities. These systems offer superior performance with reduced infrastructure requirements.
					</p>
					
					<div class="space-y-4">
						<div class="rounded-lg bg-blue-50 p-4">
							<h4 class="mb-2 font-medium">Tunnel Ventilation</h4>
							<p class="text-gray-700">High-velocity air movement for road and rail tunnels, ensuring safety and air quality.</p>
						</div>
						
						<div class="rounded-lg bg-blue-50 p-4">
							<h4 class="mb-2 font-medium">Parking Garage Systems</h4>
							<p class="text-gray-700">Efficient CO removal and air circulation in underground and multi-level parking facilities.</p>
						</div>
						
						<div class="rounded-lg bg-blue-50 p-4">
							<h4 class="mb-2 font-medium">Emergency Control</h4>
							<p class="text-gray-700">Smoke control and emergency ventilation capabilities for life safety applications.</p>
						</div>
					</div>
				</div>
				
				<div class="flex items-center justify-center">
					<div class="h-80 w-full overflow-hidden rounded-lg bg-gray-200">
						<div class="flex h-full w-full items-center justify-center text-gray-500">
							JETFAN System Technology Image
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Process Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR APPROACH</h2>
		
		<div class="mx-auto max-w-4xl">
			<div class="flex flex-col space-y-12 md:space-y-16">
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
							Our certified technicians carefully install your system with minimal disruption to your operations.
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
						<h3 class="mb-2 text-xl font-medium">Ongoing Support</h3>
						<p class="text-gray-700">
							We provide ongoing maintenance and support to ensure continued efficiency and extend the life of your investment.
						</p>
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