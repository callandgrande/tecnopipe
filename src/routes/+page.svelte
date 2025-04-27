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