<!-- src/routes/+page.svelte -->
<script>
	// Your script logic here
</script>

<section class="hero relative min-h-screen w-full overflow-hidden bg-white">
	<!-- Mobile-optimized version (hidden on larger screens) -->
	<div class="md:hidden">
		<div class="relative min-h-screen w-full">
			<!-- Video background for mobile -->
			<div class="absolute inset-0">
				<video autoplay muted loop playsinline class="h-full w-full object-cover">
					<source src="videos/hero-video.MP4" type="video/mp4" />
					<!-- Fallback image if video fails to load -->
					<img src="images/hero.png" alt="hero" class="h-full w-full object-cover" />
				</video>
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
			</div>
			<!-- Content remains the same -->
			<div
				class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center"
			>
				<h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl">
					<span class="inline-block">TECNO</span><span class="inline-block text-blue-300">PIPE</span>
				</h1>
				<p class="mb-8 max-w-md text-lg text-gray-100">
					Industry-leading pipe solutions for residential and commercial applications.
				</p>
				<div class="flex gap-4">
					<a href="/products">
						<button
							class="rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-all hover:bg-blue-800"
						>
							Our Products
						</button>
					</a>
					<a
						href="/contact"
						class="rounded-md border-2 border-white bg-transparent px-5 py-3 font-medium text-white transition-all hover:bg-white/10"
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop version (improved layout, hidden on mobile) -->
	<div class="hidden md:block">
		<div class="relative min-h-screen w-full">
			<!-- Video background for desktop -->
			<div class="absolute inset-0 z-0">
				<video autoplay muted loop playsinline class="h-full w-full object-cover">
					<source src="videos/hero-video.MP4" type="video/mp4" />
					<!-- Fallback image if video fails to load -->
					<img src="images/hero.png" alt="hero" class="h-full w-full object-cover" />
				</video>
				<div
					class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
				></div>
			</div>
			<!-- Content remains the same -->
			<div class="relative z-10 flex h-screen items-center px-32">
				<div class="ml-8 max-w-2xl lg:ml-16">
					<h1 class="mb-6 text-6xl font-bold text-white lg:text-7xl">
						<span class="text-white">TECNO</span><span class="text-blue-300">PIPE</span>
					</h1>
					<p class="mb-8 text-xl font-light text-gray-100 lg:text-2xl">
						Industry-leading pipe solutions for residential and commercial applications.
					</p>
					<div class="flex gap-4">
						<a
							href="/products"
							class="rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800 hover:shadow-lg"
						>
							Our Products
						</a>
						<a
							href="/contact"
							class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Values Section -->
<section class="core-values overflow-hidden bg-white py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-xl font-medium sm:text-2xl md:mb-10">
			HOW WE'RE STRENGTHENING COMMUNITIES
		</h2>

		<!-- Circles for mobile - vertical stack -->
		<div class="mb-12 flex flex-col items-center gap-4 md:hidden">
			<div
				class="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
			>
				<span class="font-medium text-gray-800">SUSTAINABILITY</span>
			</div>
			<div
				class="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
			>
				<span class="font-medium text-gray-800">GROWTH</span>
			</div>
			<div
				class="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
			>
				<span class="font-medium text-gray-800">INCLUSION</span>
			</div>
			<div
				class="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
			>
				<span class="font-medium text-gray-800">DIVERSITY</span>
			</div>
			<div
				class="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
			>
				<span class="font-medium text-gray-800">EQUITY</span>
			</div>
		</div>

		<!-- Larger overlapping circles with proper stacking for tablet and desktop -->
		<div class="max-w-8xl mx-auto mb-16 hidden justify-center md:flex">
			<!-- Values circles - each one is underneath the one to its left -->
			<div class="relative z-50 mx-[-10px] flex-none">
				<div
					class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-white lg:h-60 lg:w-60"
				>
					<span class="font-medium text-gray-800">SUSTAINABILITY</span>
				</div>
			</div>
			<div class="relative z-40 mx-[-10px] flex-none">
				<div
					class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-white lg:h-60 lg:w-60"
				>
					<span class="font-medium text-gray-800">GROWTH</span>
				</div>
			</div>
			<div class="relative z-30 mx-[-10px] flex-none">
				<div
					class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-white lg:h-60 lg:w-60"
				>
					<span class="font-medium text-gray-800">INCLUSION</span>
				</div>
			</div>
			<div class="relative z-20 mx-[-10px] flex-none">
				<div
					class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-white lg:h-60 lg:w-60"
				>
					<span class="font-medium text-gray-800">DIVERSITY</span>
				</div>
			</div>
			<div class="relative z-10 mx-[-10px] flex-none">
				<div
					class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gray-300 bg-white lg:h-60 lg:w-60"
				>
					<span class="font-medium text-gray-800">EQUITY</span>
				</div>
			</div>
		</div>

		<div class="mx-auto mb-10 flex max-w-6xl flex-col justify-center md:flex-row">
			<div class="mx-auto mb-6 max-w-lg text-center md:mx-6 md:mb-0">
				<p class="mb-2 text-xs text-gray-700">
					Helping our clients grow in fundamental ways. With a constant focus on sustainability,
					growth-driven solutions, and targeted innovations, we work collaboratively with our
					customers to deliver services that drive efficiency together with the most influential
					companies in the world.
				</p>
				<a href="#" class="text-xs font-medium text-gray-800">LEARN MORE →</a>
			</div>

			<div class="mx-auto max-w-lg text-center md:mx-6">
				<p class="mb-2 text-xs text-gray-700">
					Sustainability is an organizing principle for key modern business, and the challenges and
					risks urgent and complex. Our focus on environmentally conscious solutions aims to drive
					meaningful outcomes while also establishing net zero by 2050 — or sooner.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- AI Innovation Section -->
<section class="ai-innovation bg-white py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-xl font-medium sm:text-2xl md:mb-10">
			INNOVATION THROUGH ARTIFICIAL INTELLIGENCE
		</h2>
		
		<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
			<!-- Left Column: Image -->
			<div class="flex items-center justify-center">
				<div class="relative h-72 w-full max-w-lg overflow-hidden rounded-lg bg-blue-50 shadow-md">
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/20"></div>
					<div class="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
						<div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
							</svg>
						</div>
						<h3 class="mb-2 text-xl font-medium text-blue-800">Smart Solutions</h3>
						<p class="text-blue-700">Harnessing the power of AI to optimize resource usage and reduce environmental impact.</p>
					</div>
				</div>
			</div>
			
			<!-- Right Column: Content -->
			<div class="space-y-6">
				<h3 class="text-2xl font-medium text-gray-800">Pioneering AI for a Sustainable Future</h3>
				<p class="text-gray-700">
					At TecnoPipe, we're leveraging cutting-edge artificial intelligence to revolutionize how pipe systems interact with the environment. Our AI-powered solutions optimize water flow, detect leaks before they become problematic, and reduce energy consumption across entire networks.
				</p>
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Predictive Maintenance</h4>
							<p class="text-sm text-gray-600">Our AI algorithms analyze data from sensors embedded in pipe systems to predict maintenance needs before failures occur, reducing waste and extending system lifespan.</p>
						</div>
					</div>
					<div class="flex items-start">
						<div class="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Resource Optimization</h4>
							<p class="text-sm text-gray-600">Smart flow management uses machine learning to reduce energy consumption by up to 30% while maintaining optimal performance in residential and commercial buildings.</p>
						</div>
					</div>
					<div class="flex items-start">
						<div class="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Carbon Footprint Reduction</h4>
							<p class="text-sm text-gray-600">Our AI-designed pipe systems and layouts minimize material usage and optimize thermal properties, contributing significantly to carbon reduction goals.</p>
						</div>
					</div>
				</div>
				<div class="pt-4">
					<a href="/ai" class="inline-flex items-center font-medium text-blue-700 hover:text-blue-800">
						Learn more about our innovations
						<svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Partners Section -->
<section class="partners bg-gray-50 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-xl font-medium sm:text-2xl md:mb-10">
			OUR TRUSTED PARTNERS
		</h2>
		
		<!-- Mobile partners display (vertical stack) -->
		<div class="flex flex-col items-center gap-8 md:hidden">
			<div class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm">
				<img src="/images/cees.png" alt="CEES Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">CEES</span>
			</div>
			
			<div class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm">
				<img src="/images/aenor.jpg" alt="AENOR Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">AENOR</span>
			</div>
			
			<div class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm">
				<img src="/images/viking.png" alt="VIKING Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">VIKING</span>
			</div>
			
			<div class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm">
				<img src="/images/wefatherm.png" alt="WEFATHERM Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">WEFATHERM</span>
			</div>
		</div>
		
		<!-- Desktop partners display (horizontal with hover effects) -->
		<div class="hidden md:block">
			<div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
				<div class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
					<div class="relative h-24 w-full overflow-hidden">
						<img 
							src="/images/cees.png" 
							alt="CEES Logo" 
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105" 
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">CEES</span>
				</div>
				
				<div class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
					<div class="relative h-24 w-full overflow-hidden">
						<img 
							src="/images/aenor.jpg" 
							alt="AENOR Logo" 
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105" 
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">AENOR</span>
				</div>
				
				<div class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
					<div class="relative h-24 w-full overflow-hidden">
						<img 
							src="/images/viking.png" 
							alt="VIKING Logo" 
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105" 
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">VIKING</span>
				</div>
				
				<div class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
					<div class="relative h-24 w-full overflow-hidden">
						<img 
							src="/images/wefatherm.png" 
							alt="WEFATHERM Logo" 
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105" 
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">WEFATHERM</span>
				</div>
			</div>
		</div>
		
		<div class="mx-auto mt-10 max-w-2xl text-center">
			<p class="text-sm text-gray-700">
				TECNOPIPE works with industry leaders to deliver the highest quality pipe solutions.
				Our strategic partnerships allow us to offer innovative and reliable products for all your needs.
			</p>
			<a href="/partners" class="mt-4 inline-block text-xs font-medium text-blue-700 hover:text-blue-800">
				LEARN MORE ABOUT OUR PARTNERSHIPS →
			</a>
		</div>
	</div>
</section>