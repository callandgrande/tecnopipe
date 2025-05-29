<!-- src/routes/products/+page.svelte (Portable Water page) -->
<script>
	import { onMount } from 'svelte';

	// Product categories
	const categories = [
		{ id: 'pipes', name: 'Polypropylene Pipes' },
		{ id: 'fittings', name: 'Fittings & Connectors' },
		{ id: 'installation', name: 'Installation Tools' },
		{ id: 'training', name: 'Training & Tutorials' }
	];

	// Featured products
	const featuredProducts = [
		{
			id: 1,
			name: 'ECOSAN PP-R Pipes',
			category: 'pipes',
			image: '/images/ppr.jpg',
			description: 'Premium polypropylene pipes from Polymelt for potable water systems',
			features: [
				'Corrosion resistant',
				'Long service life',
				'Non-toxic materials',
				'Various diameters available'
			]
		},
		{
			id: 2,
			name: 'ECOSAN Fusion Fittings',
			category: 'fittings',
			image: '/images/fusion.png',
			description: 'Premium polypropylene fittings designed for secure, leak-proof connections',
			features: [
				'Heat fusion technology',
				'Seamless integration',
				'High pressure resistance',
				'Various configurations'
			]
		},
		{
			id: 3,
			name: 'Fusion Welding Machine',
			category: 'installation',
			image: '/images/welding-machine.png',
			description: 'Professional-grade welding tools for PP-R pipe installation',
			features: [
				'Precise temperature control',
				'Multiple socket sizes',
				'Durable construction',
				'Carrying case included'
			]
		},
		{
			id: 4,
			name: 'PP-R Pipe Installation Tutorial',
			category: 'training',
			videoId: 'hFw2Tr_bwdc',
			description:
				'Learn the proper installation techniques for PP-R piping systems from our expert technicians',
			features: [
				'Step-by-step guidance',
				'Professional techniques',
				'Tool requirements',
				'Safety procedures'
			]
		}
	];

	// Active category
	let activeCategory = 'all';

	// Filter products based on active category
	$: filteredProducts =
		activeCategory === 'all'
			? featuredProducts
			: featuredProducts.filter((product) => product.category === activeCategory);

	// Change active category
	function setActiveCategory(categoryId) {
		activeCategory = categoryId;
	}

	// Handle image errors
	function handleImageError(e) {
		// Fallback to a placeholder
		e.target.src = '/images/products-hero.png';
		// Add an error class for styling
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

<svelte:head>
	<title>Portable Water Products | TecnoPipe</title>
	<meta
		name="description"
		content="Premium polypropylene pipe systems for drinking water by TecnoPipe. High-quality ECOSAN products from Polymelt, designed for durability and safety."
	/>
</svelte:head>

<!-- Page header with hero image -->
<section class="relative bg-gray-900 py-24 md:py-32">
	<div class="absolute inset-0 z-0 opacity-30">
		<img
			src="/images/products-hero.png"
			alt="Premium drinking water pipe systems"
			class="h-full w-full object-cover"
			on:error={handleImageError}
		/>
	</div>
	<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

	<div class="relative z-10 container mx-auto px-4 sm:px-6">
		<div class="max-w-3xl">
			<h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Portable Water</h1>
			<p class="mb-6 text-lg text-gray-100 md:text-xl">
				Premium polypropylene pipes and fittings manufactured by Polymelt. Industry leaders for
				drinking water systems.
			</p>
			<div class="flex flex-wrap gap-3">
				<a
					href="#contact-form"
					class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800"
				>
					Request Quote
				</a>
				<a
					href="#training"
					class="rounded-md border-2 border-white bg-transparent px-5 py-3 font-medium text-white transition-all hover:bg-white/10"
				>
					Installation Guide
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
			<h2 class="mb-4 text-2xl font-medium sm:text-3xl">ECOSAN BY POLYMELT</h2>
			<p class="text-gray-700">
				TecnoPipe supplies high-quality Polymelt polypropylene piping systems specifically designed
				for drinking water applications. Our ECOSAN products meet rigorous international standards
				and are engineered for durability, safety, and environmental sustainability.
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
				<div
					class={`product-card transform rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${pageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
					style="transition-delay: {product.id * 150}ms"
				>
					{#if product.videoId}
						<!-- Video content -->
						<div class="mb-4 h-48 overflow-hidden rounded bg-gray-100">
							<div class="relative h-full w-full" style="padding-bottom: 75%;">
								<iframe
									src="https://www.youtube.com/embed/{product.videoId}"
									title={product.name}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									class="absolute top-0 left-0 h-full w-full"
								></iframe>
							</div>
						</div>
					{:else}
						<!-- Image content -->
						<div
							class="mb-4 flex h-48 items-center justify-center overflow-hidden rounded bg-gray-100"
						>
							<img
								src={product.image}
								alt={product.name}
								class="max-h-full max-w-full object-contain"
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
					<a
						href="#contact-form"
						class="inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
					>
						{product.videoId ? 'Access Full Training' : 'Request Details'} →
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Polymelt quality highlight -->
<section class="bg-gray-50 py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex flex-col items-center md:flex-row md:items-start md:space-x-12">
			<div class="mb-8 w-full md:mb-0 md:w-1/2">
				<div class="aspect-4/3 h-64 w-full overflow-hidden rounded bg-gray-200 md:h-auto">
					<img
						src="/images/ppr-tecnopipe.png"
						alt="Polymelt PP-R pipes"
						class="h-full w-full object-cover"
						on:error={handleImageError}
					/>
				</div>
			</div>

			<div class="w-full md:w-1/2">
				<h2 class="mb-4 text-2xl font-medium sm:text-3xl">POLYMELT QUALITY EXCELLENCE</h2>
				<p class="mb-4 text-gray-700">
					Our ECOSAN polypropylene pipes and fittings from Polymelt are manufactured using advanced
					production techniques and stringent quality control processes. This ensures every
					component meets the highest standards of reliability and performance.
				</p>
				<p class="mb-6 text-gray-700">
					These premium piping systems are specifically designed for drinking water applications,
					offering:
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
						Product Specifications
					</a>
					<a
						href="https://www.polymelt.com/about-polymelt/company/sustainability/"
						class="rounded-md border-2 border-green-500 bg-transparent px-5 py-3 font-medium text-green-700 transition-all hover:bg-green-50"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sustainability Info
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Installation Process -->
<section id="training" class="bg-white py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">INSTALLATION PROCESS</h2>

		<div class="mx-auto max-w-5xl">
			<!-- Video with proper aspect ratio -->
			<div class="mb-12 overflow-hidden rounded-lg shadow-lg">
				<div class="relative" style="padding-bottom: 56.25%;">
					<iframe
						src="https://www.youtube.com/embed/hFw2Tr_bwdc"
						title="PP-R Pipe Installation Tutorial"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="absolute top-0 left-0 h-full w-full"
					></iframe>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="rounded-lg bg-gray-50 p-6 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
					>
						<span class="text-3xl font-bold text-blue-700">1</span>
					</div>
					<h3 class="mb-2 font-medium">Preparation</h3>
					<p class="text-sm text-gray-700">
						Measure and cut the pipe to the required length using the appropriate cutting tool.
						Clean all surfaces thoroughly.
					</p>
				</div>

				<div class="rounded-lg bg-gray-50 p-6 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
					>
						<span class="text-3xl font-bold text-blue-700">2</span>
					</div>
					<h3 class="mb-2 font-medium">Heat Fusion</h3>
					<p class="text-sm text-gray-700">
						Use the welding machine to heat both the pipe and fitting until they reach the correct
						fusion temperature.
					</p>
				</div>

				<div class="rounded-lg bg-gray-50 p-6 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
					>
						<span class="text-3xl font-bold text-blue-700">3</span>
					</div>
					<h3 class="mb-2 font-medium">Connection</h3>
					<p class="text-sm text-gray-700">
						Join the heated components quickly and maintain steady pressure until the joint cools
						completely.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Applications Section -->
<section id="applications" class="bg-gray-50 py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">APPLICATIONS</h2>

		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
			<div class="rounded-lg bg-white p-8 shadow-sm">
				<h3 class="mb-4 text-xl font-medium text-blue-700">Residential</h3>
				<p class="mb-4 text-gray-700">
					ECOSAN PP-R systems are ideal for residential plumbing, offering homeowners a clean, safe,
					and long-lasting solution for drinking water distribution.
				</p>
				<ul class="space-y-2">
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Apartments and houses</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Condominiums and multifamily buildings</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Renovations and retrofits</span>
					</li>
				</ul>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-sm">
				<h3 class="mb-4 text-xl font-medium text-blue-700">Commercial</h3>
				<p class="mb-4 text-gray-700">
					Our systems provide reliable performance for demanding commercial environments where
					safety and longevity are essential.
				</p>
				<ul class="space-y-2">
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Hotels and restaurants</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Office buildings</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Shopping centers</span>
					</li>
				</ul>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-sm">
				<h3 class="mb-4 text-xl font-medium text-blue-700">Institutional</h3>
				<p class="mb-4 text-gray-700">
					ECOSAN products meet the strict requirements of institutional facilities where water
					quality and system reliability are critical.
				</p>
				<ul class="space-y-2">
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Hospitals and healthcare facilities</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Schools and universities</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Government buildings</span>
					</li>
				</ul>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-sm">
				<h3 class="mb-4 text-xl font-medium text-blue-700">Industrial</h3>
				<p class="mb-4 text-gray-700">
					Our PP-R piping systems can handle industrial applications requiring chemical resistance
					and consistent performance.
				</p>
				<ul class="space-y-2">
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Food and beverage processing</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Pharmaceutical facilities</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-blue-700">•</span>
						<span class="text-gray-700">Manufacturing plants</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Contact form section -->
<section id="contact-form" class="bg-white py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">REQUEST INFORMATION</h2>

		<div class="mx-auto max-w-3xl rounded-lg bg-gray-50 p-8 shadow-md">
			<p class="mb-6 text-center text-gray-700">
				Contact us for detailed product specifications, pricing information, or to discuss your
				project requirements.
			</p>

			<form class="space-y-6">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label for="name" class="mb-1 block text-sm font-medium text-gray-700"
							>Full Name *</label
						>
						<input
							type="text"
							id="name"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label for="company" class="mb-1 block text-sm font-medium text-gray-700">Company</label
						>
						<input
							type="text"
							id="company"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
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
						<label for="phone" class="mb-1 block text-sm font-medium text-gray-700">Phone</label>
						<input
							type="tel"
							id="phone"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>
				</div>

				<div>
					<label for="product-interest" class="mb-1 block text-sm font-medium text-gray-700"
						>Product Interest *</label
					>
					<select
						id="product-interest"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						required
					>
						<option value="">Select product category</option>
						<option value="PP-R Pipes">PP-R Pipes</option>
						<option value="Fittings & Connectors">Fittings & Connectors</option>
						<option value="Installation Tools">Installation Tools</option>
						<option value="Full System">Complete System</option>
						<option value="Other">Other (please specify)</option>
					</select>
				</div>

				<div>
					<label for="project-details" class="mb-1 block text-sm font-medium text-gray-700"
						>Project Details</label
					>
					<textarea
						id="project-details"
						rows="4"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						placeholder="Please describe your project and requirements..."
					></textarea>
				</div>

				<div>
					<button
						type="submit"
						class="w-full rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						Submit Request
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready to Upgrade Your Piping System?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Experience the benefits of ECOSAN polypropylene piping for your next project. Superior
			quality, safety, and longevity for all your drinking water applications.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Schedule a Consultation
			</a>
			<a
				href="tel:0989660516"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Call 0989660516
			</a>
		</div>
	</div>
</section>
