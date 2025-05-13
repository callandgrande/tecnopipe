<!-- src/routes/ventilacion/+page.svelte -->
<script>
	// Import components or functionality if needed

	// Video ID from YouTube for STUDOR presentation
	const studorVideoId = 'LyTvvYvJHyo';

	// STUDOR product data
	const studorProducts = [
		{
			name: 'Mini-Vent',
			image: '/images/STUDOR-Mini-Vent.png',
			description: 'Compact air admittance valve for single fixture venting applications',
			features: [
				'Space-saving design',
				'Prevents sewer gas escape',
				'Easy installation',
				'Cost-effective'
			]
		},
		{
			name: 'Maxi-Vent',
			image: '/images/studor-maxi.png',
			description: 'High-capacity air admittance valve for multiple fixture or branch venting',
			features: [
				'Greater airflow capacity',
				'Suitable for multiple fixtures',
				'Durable construction',
				'Maintenance-free'
			]
		},
		{
			name: 'P.A.P.A.',
			image: '/images/studor-papa.png',
			description:
				'Positive Air Pressure Attenuator that protects plumbing systems from positive pressure transients',
			features: [
				'Prevents trap seal loss',
				'Complements air admittance valves',
				'Reduces system noise',
				'Simple installation'
			]
		}
	];

	// Benefits of the STUDOR system
	const systemBenefits = [
		{
			title: 'Material Savings',
			description: 'Reduces vent piping material by up to 40%, lowering project costs'
		},
		{
			title: 'Design Flexibility',
			description: 'Allows greater design freedom with fewer constraints on fixture placement'
		},
		{
			title: 'Environmental Benefits',
			description:
				'Fewer roof penetrations mean better building envelope integrity and energy efficiency'
		},
		{
			title: 'Improved Performance',
			description: 'Better balanced systems with consistent performance and reduced noise'
		}
	];
</script>

<svelte:head>
	<title>Active Ventilation | TecnoPipe Solutions</title>
	<meta
		name="description"
		content="STUDOR active ventilation solutions for modern plumbing systems. Efficient, reliable air admittance valves for optimal plumbing performance."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Active Ventilation</h1>
			<p class="text-xl font-light text-gray-100">
				STUDOR innovative solutions for modern plumbing ventilation
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<!-- Introduction Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">
				STUDOR VENTILATION TECHNOLOGY
			</h2>

			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg leading-relaxed">
					As the exclusive distributor of STUDOR products in Ecuador, TecnoPipe brings revolutionary
					air admittance technology to modernize plumbing ventilation systems across residential,
					commercial, and industrial applications.
				</p>

				<p>
					Traditional plumbing ventilation requires extensive networks of vent pipes running through
					walls and roofs. STUDOR's innovative approach eliminates many of these requirements,
					resulting in more efficient, cost-effective, and environmentally friendly systems.
				</p>
			</div>

			<!-- STUDOR Video -->
			<div class="mb-12 overflow-hidden rounded-lg shadow-lg">
				<div class="relative" style="padding-bottom: 56.25%;">
					<iframe
						src="https://www.youtube.com/embed/LyTvvYvJHyo"
						title="STUDOR Ventilation System"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="absolute top-0 left-0 h-full w-full"
					></iframe>
				</div>
			</div>

			<div class="mt-8 text-center">
				<a
					href="/images/STUDOR-Presentation.pdf"
					download
					class="inline-flex items-center rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800"
				>
					<svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					Download STUDOR Presentation (PDF)
				</a>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">HOW STUDOR TECHNOLOGY WORKS</h2>

		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
			<div class="order-2 md:order-1">
				<div class="space-y-6">
					<div class="rounded-lg bg-white p-6 shadow-sm">
						<h3 class="mb-3 text-lg font-medium">Air Admittance Valves</h3>
						<p class="text-gray-700">
							STUDOR valves open only when needed, allowing air to enter the plumbing system when
							negative pressure occurs. When the system is balanced or under positive pressure, the
							valve remains closed, preventing sewer gas escape.
						</p>
					</div>

					<div class="rounded-lg bg-white p-6 shadow-sm">
						<h3 class="mb-3 text-lg font-medium">P.A.P.A. (Positive Air Pressure Attenuator)</h3>
						<p class="text-gray-700">
							This innovative component manages positive pressure in the system, complementing air
							admittance valves to create a complete solution for both negative and positive
							pressure scenarios.
						</p>
					</div>

					<div class="rounded-lg bg-white p-6 shadow-sm">
						<h3 class="mb-3 text-lg font-medium">Complete System Approach</h3>
						<p class="text-gray-700">
							The combination of air admittance valves and pressure attenuators creates a fully
							balanced plumbing ventilation system that works with existing drainage designs while
							eliminating most conventional venting requirements.
						</p>
					</div>
				</div>
			</div>

			<div class="order-1 md:order-2">
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<div class="mb-6 overflow-hidden rounded-lg">
						<img
							src="/images/studor-system-diagram.png"
							alt="STUDOR System Diagram"
							class="w-full object-contain"
						/>
					</div>
					<p class="text-center text-sm text-gray-600">
						STUDOR's innovative approach to plumbing ventilation
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Products Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">STUDOR PRODUCT LINE</h2>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each studorProducts as product}
				<div
					class="flex flex-col rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="p-6">
						<div class="mb-4 flex h-48 items-center justify-center">
							<img
								src={product.image}
								alt={product.name}
								class="max-h-full max-w-full object-contain"
							/>
						</div>
						<h3 class="mb-2 text-xl font-medium text-blue-700">{product.name}</h3>
						<p class="mb-4 text-gray-700">{product.description}</p>
						<ul class="mb-4 space-y-1">
							{#each product.features as feature}
								<li class="flex items-start text-sm">
									<span class="mr-2 text-blue-700">•</span>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">SYSTEM BENEFITS</h2>

		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
			{#each systemBenefits as benefit}
				<div class="rounded-lg bg-white p-6 shadow-md">
					<h3 class="mb-3 text-lg font-medium text-blue-700">{benefit.title}</h3>
					<p class="text-gray-700">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="design-support" class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl rounded-lg bg-blue-50 p-8 shadow-md">
			<h2 class="mb-6 text-center text-2xl font-medium text-blue-800">DESIGN SUPPORT</h2>

			<p class="mb-6 text-center text-gray-700">
				Our technical team can help convert your traditional plumbing designs to STUDOR-based
				systems, optimizing performance while reducing costs.
			</p>

			<div class="rounded-lg bg-white p-6 shadow-sm">
				<h3 class="mb-4 text-lg font-medium">Upload Your Plans for Conversion</h3>
				<p class="mb-4 text-gray-700">
					Submit your sanitary plumbing plans, and our experts will provide a redesign using the
					STUDOR system, demonstrating material savings and improved performance.
				</p>

				<form class="space-y-4">
					<div>
						<label for="name" class="mb-1 block text-sm font-medium text-gray-700"
							>Your Name *</label
						>
						<input
							type="text"
							id="name"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email *</label>
						<input
							type="email"
							id="email"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label for="project" class="mb-1 block text-sm font-medium text-gray-700"
							>Project Name *</label
						>
						<input
							type="text"
							id="project"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label for="file" class="mb-1 block text-sm font-medium text-gray-700"
							>Upload Plumbing Plans (PDF) *</label
						>
						<input
							type="file"
							id="file"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							accept=".pdf,.dwg,.dxf"
							required
						/>
						<p class="mt-1 text-xs text-gray-500">Accepted formats: PDF, DWG, DXF</p>
					</div>

					<div>
						<label for="notes" class="mb-1 block text-sm font-medium text-gray-700"
							>Additional Notes</label
						>
						<textarea
							id="notes"
							rows="3"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						></textarea>
					</div>

					<div>
						<button
							type="submit"
							class="w-full rounded-md bg-blue-700 px-4 py-3 font-medium text-white transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							Submit Plans for Review
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">
			Ready to Modernize Your Plumbing Ventilation?
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Experience the benefits of STUDOR ventilation systems for your next project.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Schedule a Consultation
			</a>
			<a
				href="#design-support"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Upload Your Plans
			</a>
		</div>
	</div>
</section>
