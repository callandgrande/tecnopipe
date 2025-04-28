<!-- src/routes/partners/+page.svelte -->
<script>
	// Partner data
	const partners = [
		{
			name: "CEES",
			logo: "/images/cees.png",
			description: "The Consejo Ecuatoriano de Edificación Sostenible (CEES) works with TecnoPipe to ensure our products meet the highest sustainability standards for construction in Ecuador. Our partnership guarantees compliance with green building regulations and industry best practices.",
			tags: ["Sustainability", "Certification", "Green Building"]
		},
		{
			name: "AENOR",
			logo: "/images/aenor.jpg",
			description: "The Spanish Association for Standardization and Certification (AENOR) has been a key partner in our expansion into Spanish-speaking markets. Their certifications validate our commitment to quality and sustainability in pipe manufacturing.",
			tags: ["Spanish Market", "Sustainability", "Standardization"]
		},
		{
			name: "VIKING",
			logo: "/images/viking.png",
			description: "Viking is our trusted manufacturing partner for specialized fire protection systems. Together, we develop integrated piping solutions for commercial and industrial buildings that meet the most stringent safety requirements worldwide.",
			tags: ["Fire Protection", "Safety Systems", "Commercial Solutions"]
		},
		{
			name: "WEFATHERM",
			logo: "/images/wefatherm.png",
			description: "Wefatherm is our premier German partner for high-performance polypropylene piping systems. This collaboration allows us to offer environmentally friendly solutions that excel in durability and chemical resistance for various industrial applications.",
			tags: ["Polypropylene Systems", "German Engineering", "Eco-friendly"]
		}
	];

	// Partnership benefits
	const partnershipBenefits = [
		{
			title: "Quality Assurance",
			description: "Our partners help us maintain the highest standards in every product we deliver."
		},
		{
			title: "Innovation",
			description: "Collaborative development leads to breakthrough solutions for complex challenges."
		},
		{
			title: "Global Reach",
			description: "Strategic partnerships expand our capacity to serve clients worldwide."
		}
	];

	// Collaboration areas
	const collaborationAreas = [
		{
			name: "Research & Development",
			features: [
				"New Material Testing", 
				"Product Innovation", 
				"Performance Studies", 
				"Sustainability Research"
			]
		},
		{
			name: "Quality Control",
			features: [
				"Standards Compliance", 
				"Certification Programs", 
				"Testing Protocols", 
				"Quality Assurance Systems"
			]
		},
		{
			name: "Specialized Applications",
			features: [
				"Healthcare Environments", 
				"Industrial Solutions", 
				"Commercial Buildings", 
				"Residential Systems"
			]
		},
		{
			name: "Sustainability Initiatives",
			features: [
				"Eco-friendly Materials", 
				"Energy Efficiency", 
				"Waste Reduction", 
				"Circular Economy Practices"
			]
		}
	];
</script>

<svelte:head>
	<title>Our Partners | TecnoPipe Solutions</title>
	<meta name="description" content="Learn about TecnoPipe's strategic partnerships with leading organizations like CEES, AENOR, VIKING, and WEFATHERM that help us deliver exceptional pipe solutions." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Our Partners</h1>
			<p class="text-xl font-light text-gray-100">
				Strategic collaborations that enhance our innovative pipe solutions
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">TRUSTED INDUSTRY PARTNERSHIPS</h2>
			
			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg leading-relaxed">
					At TecnoPipe, we collaborate with industry leaders to deliver the highest quality pipe solutions. Our strategic partnerships enable us to incorporate cutting-edge technologies, maintain rigorous quality standards, and offer innovative products that meet the evolving needs of our clients across diverse markets and applications.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Core Partners Grid -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR KEY PARTNERS</h2>
		
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each partners as partner}
				<div class="rounded-lg bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
					<div class="mb-6 flex h-24 items-center justify-center">
						<img src={partner.logo} alt="{partner.name} Logo" class="max-h-full object-contain" />
					</div>
					<h3 class="mb-4 text-center text-xl font-medium text-blue-700">{partner.name}</h3>
					<p class="mb-6 text-gray-700">{partner.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each partner.tags as tag}
							<span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">{tag}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Detailed Partnership Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">PARTNERSHIP BENEFITS</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each partnershipBenefits as benefit, i}
				<div class="rounded-lg border-l-4 border-blue-700 bg-gray-50 p-6 shadow-sm">
					<h3 class="mb-4 text-xl font-medium">{benefit.title}</h3>
					<p class="text-gray-700">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Collaboration Areas Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">COLLABORATION AREAS</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="mt-16">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each collaborationAreas as area}
					<div class="group rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
						<h4 class="mb-4 border-b border-gray-200 pb-2 text-center text-lg font-medium text-blue-700 group-hover:text-blue-800">{area.name}</h4>
						<ul class="space-y-2">
							{#each area.features as feature}
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
	</div>
</section>

<!-- Partner Spotlight Sections -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">PARTNER SPOTLIGHT</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<!-- CEES Spotlight -->
		<div class="mb-16">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">CEES - Consejo Ecuatoriano de Edificación Sostenible</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div>
						<p class="mb-6 text-gray-700">
							Our partnership with CEES ensures that all TecnoPipe products meet the highest Ecuadorian sustainability standards. This collaboration has been instrumental in enhancing our commitment to environmentally responsible construction while maintaining product quality and reliability.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Green Building Certification</h4>
								<p class="text-gray-700">Comprehensive sustainability certifications that validate our products for use in LEED and other green building projects.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Sustainable Practices</h4>
								<p class="text-gray-700">Collaborative work on establishing and refining eco-friendly standards for pipe systems and water conservation technologies.</p>
							</div>
						</div>
					</div>
					
					<div class="flex items-center justify-center">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								<img src="/images/cees.png" alt="CEES Logo" class="max-h-full max-w-full object-contain p-8" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- AENOR Spotlight -->
		<div class="mb-16">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h3 class="mb-6 text-center text-xl font-medium text-blue-700 md:text-2xl">AENOR</h3>
				
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div class="flex items-center justify-center md:order-2">
						<div class="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
							<div class="flex h-full w-full items-center justify-center text-gray-500">
								<img src="/images/aenor.jpg" alt="AENOR Logo" class="max-h-full max-w-full object-contain p-8" />
							</div>
						</div>
					</div>
					
					<div class="md:order-1">
						<p class="mb-6 text-gray-700">
							Our collaboration with AENOR has been crucial for our growth in Spanish-speaking markets. Their rigorous certification processes and market expertise have helped us adapt our products to meet regional requirements while maintaining our commitment to quality.
						</p>
						
						<div class="space-y-4">
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Regional Compliance</h4>
								<p class="text-gray-700">Specialized certifications for Spanish and Latin American markets.</p>
							</div>
							
							<div class="rounded-lg bg-blue-50 p-4">
								<h4 class="mb-2 font-medium">Sustainability Validation</h4>
								<p class="text-gray-700">Third-party verification of our environmental claims and sustainability practices.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Become a Partner Section -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Interested in Partnering with Us?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			We're always looking to collaborate with innovative organizations that share our commitment to quality and excellence in pipe solutions.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Contact Our Partnership Team
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