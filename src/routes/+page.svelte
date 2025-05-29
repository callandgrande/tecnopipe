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
					<span class="inline-block">TECNO</span><span class="inline-block text-blue-300">PIPE</span
					>
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

<!-- AI Innovation Section for src/routes/+page.svelte -->
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
					<div
						class="relative flex h-full w-full flex-col items-center justify-center p-6 text-center"
					>
						<div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10 text-blue-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								/>
							</svg>
						</div>
						<h3 class="mb-2 text-xl font-medium text-blue-800">Smart Solutions</h3>
						<p class="text-blue-700">
							Harnessing innovative technologies to optimize resource usage and reduce environmental
							impact.
						</p>
					</div>
				</div>
			</div>

			<!-- Right Column: Content -->
			<div class="space-y-6">
				<h3 class="text-2xl font-medium text-gray-800">
					Pioneering Solutions for a Sustainable Future
				</h3>
				<p class="text-gray-700">
					At TecnoPipe, we're leveraging advanced technologies to revolutionize how pipe systems
					interact with the environment. Our innovative solutions optimize water flow, improve
					efficiency, and reduce energy consumption across entire networks.
				</p>
				<div class="space-y-4">
					<div class="flex items-start">
						<div
							class="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 text-blue-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Smart Maintenance</h4>
							<p class="text-sm text-gray-600">
								Our systems incorporate advanced monitoring capabilities that help optimize
								maintenance schedules, reducing waste and extending system lifespan.
							</p>
						</div>
					</div>
					<div class="flex items-start">
						<div
							class="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 text-blue-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Resource Optimization</h4>
							<p class="text-sm text-gray-600">
								Smart flow management uses technology to reduce energy consumption by up to 30%
								while maintaining optimal performance in residential and commercial buildings.
							</p>
						</div>
					</div>
					<div class="flex items-start">
						<div
							class="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 text-blue-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-800">Carbon Footprint Reduction</h4>
							<p class="text-sm text-gray-600">
								Our optimized pipe systems and layouts minimize material usage and improve thermal
								properties, contributing significantly to carbon reduction goals.
							</p>
						</div>
					</div>
				</div>
				<div class="pt-4">
					<a
						href="/ai"
						class="inline-flex items-center font-medium text-blue-700 hover:text-blue-800"
					>
						Learn more about our innovations
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Instagram Feed Section -->
<section class="instagram-feed bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<!-- Section Header -->
		<div class="mb-12 text-center">
			<div class="mb-4 flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 text-blue-700"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
					/>
				</svg>
			</div>
			<h2 class="mb-4 text-xl font-medium sm:text-2xl md:mb-6">FOLLOW OUR JOURNEY</h2>
			<p class="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
				Stay connected with TecnoPipe and see our latest projects, innovations, and behind-the-scenes moments
			</p>
		</div>

		<!-- Instagram Feed Container -->
		<div class="mx-auto max-w-6xl">
			<!-- Mobile version -->
			<div class="md:hidden">
				<div class="mb-6 text-center">
					<a
						href="https://www.instagram.com/tecnopipe_ec/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-all hover:from-purple-600 hover:to-pink-600 hover:shadow-lg"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
							/>
						</svg>
						@tecnopipe_ec
					</a>
				</div>
			</div>

			<!-- Desktop Instagram Feed Grid -->
			<div class="hidden md:block">
				<!-- Instagram Feed Widget Container -->
				<!-- Option 1: Using SnapWidget (recommended) -->
				<div id="snapwidget-container" class="mb-8">
					<!-- Replace this iframe with your SnapWidget embed code -->
					<iframe
						src="https://snapwidget.com/embed/YOUR_SNAPWIDGET_ID"
						class="snapwidget-widget mx-auto h-96 w-full max-w-4xl rounded-lg shadow-lg"
						allowtransparency="true"
						frameborder="0"
						scrolling="no"
						style="border:none; overflow:hidden; width:100%; height:400px;"
					></iframe>
				</div>

				<!-- Option 2: Custom Grid Layout (if using Instafeed.js or similar) -->
				<div id="instafeed" class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					<!-- Instagram posts will be loaded here via JavaScript -->
					<!-- Placeholder cards -->
					<div class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md">
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg class="mx-auto mb-2 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md">
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg class="mx-auto mb-2 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md">
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg class="mx-auto mb-2 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md">
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg class="mx-auto mb-2 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div class="mt-8 text-center">
				<a
					href="https://www.instagram.com/tecnopipe_ec/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-medium text-white transition-all hover:from-purple-600 hover:to-pink-600 hover:shadow-lg"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
						/>
					</svg>
					Follow @tecnopipe_ec
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Partners Section -->
<section class="partners bg-gray-50 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-xl font-medium sm:text-2xl md:mb-10">OUR TRUSTED PARTNERS</h2>

		<!-- Mobile partners display (vertical stack) -->
		<div class="flex flex-col items-center gap-8 md:hidden">
			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/ecosan.png" alt="ECOSAN Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">ECOSAN</span>
			</div>

			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/studor.png" alt="STUDOR Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">STUDOR</span>
			</div>

			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/dcadd.png" alt="DCADD Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">DCADD</span>
			</div>

			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/trane.png" alt="TRANE Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">TRANE</span>
			</div>

			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/mitsubishi.png" alt="MITSUBISHI Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">MITSUBISHI</span>
			</div>

			<div
				class="partner-card flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-sm"
			>
				<img src="/images/sodeca.png" alt="SODECA Logo" class="mb-4 h-16 object-contain" />
				<span class="text-sm font-medium text-gray-800">SODECA</span>
			</div>
		</div>

		<!-- Desktop partners display (horizontal with hover effects) -->
		<div class="hidden md:block">
			<div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-3">
				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/ecosan.png"
							alt="ECOSAN Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">ECOSAN</span>
				</div>

				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/studor.png"
							alt="STUDOR Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">STUDOR</span>
				</div>

				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/dcadd.png"
							alt="DCADD Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">DCADD</span>
				</div>

				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/trane.png"
							alt="TRANE Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">TRANE</span>
				</div>

				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/mitsubishi.png"
							alt="MITSUBISHI Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">MITSUBISHI</span>
				</div>

				<div
					class="partner-card group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="relative h-24 w-full overflow-hidden">
						<img
							src="/images/sodeca.png"
							alt="SODECA Logo"
							class="mx-auto h-full object-contain transition-transform group-hover:scale-105"
						/>
					</div>
					<span class="mt-4 text-sm font-medium text-gray-800">SODECA</span>
				</div>
			</div>
		</div>
	</div>
</section>
