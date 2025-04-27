<!-- src/routes/hvac/+page.svelte -->
<script>
	// HVAC services data
	const hvacServices = [
		{
			title: "Design",
			description: "Custom HVAC solutions engineered specifically for your space and requirements",
			icon: "📐" // You can replace with actual icon components later
		},
		{
			title: "Installation",
			description: "Professional implementation by certified technicians with minimal disruption",
			icon: "🔧"
		},
		{
			title: "Maintenance",
			description: "Regular service plans to ensure optimal performance and extend equipment life",
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

	// Service benefits
	const serviceBenefits = {
		design: [
			{
				title: "Custom Engineering",
				description: "Tailored solutions based on your specific needs, space constraints, and budget"
			},
			{
				title: "Energy Modeling",
				description: "Advanced simulation to predict and optimize system performance and efficiency"
			},
			{
				title: "Technical Documentation",
				description: "Comprehensive plans, specifications, and documentation for your project"
			}
		],
		installation: [
			{
				title: "Certified Technicians",
				description: "Experienced professionals with specific training for each installation specialty"
			},
			{
				title: "Quality Materials",
				description: "Premium components from trusted manufacturers with robust warranties"
			},
			{
				title: "Project Management",
				description: "Dedicated oversight ensuring timely completion with minimal disruption"
			}
		],
		maintenance: [
			{
				title: "Preventive Programs",
				description: "Scheduled maintenance to prevent costly breakdowns and extend system life"
			},
			{
				title: "Emergency Service",
				description: "Rapid response teams available when unexpected issues arise"
			},
			{
				title: "Performance Optimization",
				description: "Regular fine-tuning to maintain efficiency and reduce operational costs"
			}
		]
	};
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
					We specialize in the design, installation, and maintenance of comprehensive HVAC systems, offering top-quality equipment and reliable service. With expertise in specialized applications including hospital environments, mechanical ventilation, control systems, and hydronic solutions, we ensure optimal performance and comfort in every space.
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
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR CORE SERVICES</h2>
		
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each hvacServices as service}
				<div class="rounded-lg bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
					<div class="mb-6 text-4xl text-blue-700">{service.icon}</div>
					<h3 class="mb-4 text-2xl font-medium">{service.title}</h3>
					<p class="text-gray-700">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- DESIGN Section -->
<section id="design" class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">DESIGN</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div>
				<p class="mb-6 text-lg text-gray-700">
					Our design process begins with understanding your specific needs, analyzing your space, and developing a custom HVAC solution that optimizes both comfort and efficiency. We utilize advanced modeling tools to ensure perfect system sizing and performance.
				</p>
				
				<div class="space-y-6">
					{#each serviceBenefits.design as benefit}
						<div class="rounded-lg border-l-4 border-blue-700 bg-gray-50 p-4 shadow-sm">
							<h4 class="mb-2 text-lg font-medium">{benefit.title}</h4>
							<p class="text-gray-700">{benefit.description}</p>
						</div>
					{/each}
				</div>
			</div>
			
			<div class="flex items-center justify-center">
				<div class="h-full w-full overflow-hidden rounded-lg bg-gray-200">
					<div class="flex h-full w-full items-center justify-center text-gray-500">
						HVAC Design Illustration
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- INSTALLATION Section with Subsections -->
<section id="installation" class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">INSTALLATION</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="flex items-center justify-center">
				<div class="h-full w-full overflow-hidden rounded-lg bg-gray-200">
					<div class="flex h-full w-full items-center justify-center text-gray-500">
						HVAC Installation Image
					</div>
				</div>
			</div>
			
			<div>
				<p class="mb-6 text-lg text-gray-700">
					Our installation teams are certified specialists with extensive experience in a wide range of HVAC applications. We handle everything from standard commercial and residential installations to complex specialized environments like healthcare facilities.
				</p>
				
				<div class="space-y-6">
					{#each serviceBenefits.installation as benefit}
						<div class="rounded-lg border-l-4 border-blue-700 bg-white p-4 shadow-sm">
							<h4 class="mb-2 text-lg font-medium">{benefit.title}</h4>
							<p class="text-gray-700">{benefit.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		
		<!-- Installation Specialties -->
		<div class="mt-16">
			<h3 class="mb-10 text-center text-xl font-medium md:text-2xl">INSTALLATION SPECIALTIES</h3>
			
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each installationSpecialties as specialty}
					<div class="group rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
						<h4 class="mb-4 border-b border-gray-200 pb-2 text-center text-lg font-medium text-blue-700 group-hover:text-blue-800">{specialty.name}</h4>
						<ul class="space-y-2">
							{#each specialty.features as feature}
								<li class="flex items-center">
									<span class="mr-2 text-blue-700">•</span>
									<span class="text-gray-700">{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		
		<!-- Specialty Details Sections -->
		<!-- Hospital HVAC -->
		<div class="mt-20">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">HVAC APPLIED TO HOSPITALS</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div>
						<p class="mb-6 text-gray-700">
							Hospital environments demand specialized HVAC solutions that maintain precise temperature, humidity, and air quality conditions. Our systems are designed to meet strict healthcare standards while ensuring patient comfort and staff productivity.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Infection Control</h4>
								<p class="text-gray-700">Advanced filtration and pressure relationships that minimize airborne pathogen transmission.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Critical Areas</h4>
								<p class="text-gray-700">Specialized solutions for operating rooms, isolation rooms, and other sensitive healthcare spaces.</p>
							</div>
						</div>
					</div>
					
					<div class="flex items-center justify-center">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								Hospital HVAC Illustration
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Mechanical Ventilation -->
		<div class="mt-8">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">MECHANICAL VENTILATION</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div class="flex items-center justify-center md:order-2">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								Ventilation System Illustration
							</div>
						</div>
					</div>
					
					<div class="md:order-1">
						<p class="mb-6 text-gray-700">
							Our mechanical ventilation solutions ensure proper air exchange, removing contaminants and providing fresh air throughout your facility. From basic exhaust systems to complex air handling units, we design and install ventilation that improves comfort and health.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">IAQ Optimization</h4>
								<p class="text-gray-700">Solutions that enhance indoor air quality through proper ventilation rates and filtration.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Energy Recovery</h4>
								<p class="text-gray-700">Energy-efficient ventilation using heat recovery technology to minimize thermal losses.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Control and Automation -->
		<div class="mt-8">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">CONTROL AND AUTOMATION</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div>
						<p class="mb-6 text-gray-700">
							Modern HVAC systems require sophisticated controls to maximize performance. We implement cutting-edge automation solutions that provide precise management of your climate systems while offering intuitive interfaces for operators and occupants.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Building Management Systems</h4>
								<p class="text-gray-700">Integrated control platforms that manage all aspects of your building's mechanical systems.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">IoT Integration</h4>
								<p class="text-gray-700">Smart sensors and connected devices that enable real-time monitoring and data-driven optimization.</p>
							</div>
						</div>
					</div>
					
					<div class="flex items-center justify-center">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								Control Systems Illustration
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Hydronic System -->
		<div class="mt-8">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">HYDRONIC SYSTEM</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div class="flex items-center justify-center md:order-2">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								Hydronic System Illustration
							</div>
						</div>
					</div>
					
					<div class="md:order-1">
						<p class="mb-6 text-gray-700">
							Water-based heating and cooling systems offer superior efficiency and comfort. Our hydronic solutions range from chilled beams to radiant floors, providing even temperatures and silent operation for a variety of applications.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Water Distribution</h4>
								<p class="text-gray-700">Precisely engineered piping networks that deliver heating and cooling where needed with minimal energy loss.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Terminal Units</h4>
								<p class="text-gray-700">Fan coils, chilled beams, and radiant panels that efficiently transfer energy from water to air.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- MAINTENANCE Section -->
<section id="maintenance" class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">MAINTENANCE</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="flex items-center justify-center">
				<div class="h-full w-full overflow-hidden rounded-lg bg-gray-200">
					<div class="flex h-full w-full items-center justify-center text-gray-500">
						Maintenance Service Illustration
					</div>
				</div>
			</div>
			
			<div>
				<p class="mb-6 text-lg text-gray-700">
					Keep your HVAC investment performing at its best with our comprehensive maintenance programs. Regular service prevents costly breakdowns, extends equipment life, and ensures your systems operate at peak efficiency year-round.
				</p>
				
				<div class="space-y-6">
					{#each serviceBenefits.maintenance as benefit}
						<div class="rounded-lg border-l-4 border-blue-700 bg-gray-50 p-4 shadow-sm">
							<h4 class="mb-2 text-lg font-medium">{benefit.title}</h4>
							<p class="text-gray-700">{benefit.description}</p>
						</div>
					{/each}
				</div>
				
				<div class="mt-8 rounded-lg bg-blue-50 p-6">
					<h4 class="mb-3 text-lg font-medium">Maintenance Plans</h4>
					<p class="mb-4 text-gray-700">
						Choose from our flexible maintenance packages tailored to your system's complexity and your operational requirements:
					</p>
					<ul class="space-y-2 text-gray-700">
						<li class="flex items-start">
							<span class="mr-2 text-blue-700">✓</span>
							<span>Quarterly inspections and tune-ups</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-blue-700">✓</span>
							<span>Priority emergency service response</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-blue-700">✓</span>
							<span>Detailed performance reports</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-blue-700">✓</span>
							<span>Discounted repair services</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="bg-gray-100 py-12 md:py-20">
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