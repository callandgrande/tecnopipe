<!-- src/routes/about/+page.svelte -->
<script>
	// Import any components or functionality if needed

	// Team members data with the specific people you requested
	const teamMembers = [
		{
			name: 'Eduardo Amador',
			position: 'Gerente General',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Rebeca Santacruz',
			position: 'TBD',
			image: '/api/placeholder/300/300'
		}
	];

	// Company milestones
	const milestones = [
		{
			year: '2013',
			title: 'Company Founded',
			description:
				'Tecnpipe was established with a vision to revolutionize the pipe industry in Ecuador.'
		},
		{
			year: '2015',
			title: 'International Partnerships',
			description:
				'Formed key partnerships with German and American manufacturers to bring high-quality products to Ecuador.'
		},
		{
			year: '2018',
			title: 'Environmental Certification',
			description:
				'Achieved international certifications for environmental protection and sustainable practices.'
		},
		{
			year: '2023',
			title: 'AI Integration',
			description:
				'Began implementing artificial intelligence solutions to improve energy efficiency in our products.'
		}
	];
</script>

<svelte:head>
	<title>About Us | TecnoPipe Solutions</title>
	<meta
		name="description"
		content="Learn about TecnoPipe's history, mission and commitment to innovation since 2013."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-56">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">About Us</h1>
			<p class="text-xl font-light text-gray-100">
				Driving innovation in pipe solutions since 2013
			</p>
		</div>
	</div>
</section>

<!-- Our Story Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">OUR STORY</h2>

			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg">
					<strong>Tecnpipe</strong> is a forward-thinking company dedicated to innovation and the development
					of markets and products in Ecuador since 2013.
				</p>

				<p>
					We proudly offer high-quality products sourced from Germany and the United States, known
					for their advanced technology, superior performance, and internationally recognized
					certifications in environmental protection, energy management, and carbon footprint
					reduction.
				</p>

				<p>
					Looking ahead, Tecnpipe is also embracing the power of artificial intelligence to drive
					greater energy efficiency and sustainability—further reinforcing our commitment to
					protecting the environment and promoting a greener future.
				</p>
			</div>

			<!-- Company Image -->
			<div
				class="mb-12 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg md:h-80"
			>
				<img src="/images/10.png" alt="TecnoPipe Company" class="max-h-full object-contain" />
			</div>
		</div>
	</div>
</section>

<!-- Mission and Values -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">MISSION & VALUES</h2>

		<div class="mb-16 flex flex-col items-stretch gap-6 md:flex-row">
			<!-- Mission -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Our Mission</h3>
				<p class="text-gray-700">
					To provide innovative, sustainable pipe solutions that meet the highest international
					standards while contributing to the development of Ecuador's infrastructure and protecting
					our environment for future generations.
				</p>
			</div>

			<!-- Vision -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Our Vision</h3>
				<p class="text-gray-700">
					To be the leading provider of eco-friendly pipe solutions in Latin America, recognized for
					our commitment to innovation, quality, and sustainability through the integration of
					cutting-edge technologies.
				</p>
			</div>
		</div>

		<!-- Core Values -->
		<h3 class="mb-6 text-center text-xl font-medium">Core Values</h3>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">QUALITY</h4>
				<p class="text-sm text-gray-700">
					Delivering products that meet the highest international standards
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">INNOVATION</h4>
				<p class="text-sm text-gray-700">
					Constantly evolving our solutions to address emerging challenges
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">SUSTAINABILITY</h4>
				<p class="text-sm text-gray-700">
					Prioritizing environmental protection in all our business decisions
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">INTEGRITY</h4>
				<p class="text-sm text-gray-700">
					Operating with transparency and honesty in all our relationships
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Milestones Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR JOURNEY</h2>

		<div class="relative mx-auto max-w-3xl">
			<!-- Timeline line -->
			<div class="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-300 md:left-1/2"></div>

			<!-- Timeline items -->
			{#each milestones as milestone, i}
				<div class="relative mb-8 md:mb-12">
					<!-- Timeline dot -->
					<div
						class="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-700 md:left-1/2"
					></div>

					<!-- Content container -->
					<div
						class={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:left-1/2 md:pl-12'}`}
					>
						<div class="rounded-lg bg-white p-6 shadow-sm">
							<h3 class="mb-1 text-2xl font-bold text-blue-700">{milestone.year}</h3>
							<h4 class="mb-2 font-medium">{milestone.title}</h4>
							<p class="text-sm text-gray-700">{milestone.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR TEAM</h2>

		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2">
			{#each teamMembers as member}
				<div class="text-center">
					<div class="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
						<img src={member.image} alt={member.name} class="h-full w-full object-cover" />
					</div>
					<h3 class="mb-1 text-lg font-medium">{member.name}</h3>
					<p class="text-gray-600">{member.position}</p>
				</div>
			{/each}
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
				Stay connected with TecnoPipe and see our latest projects, innovations, and
				behind-the-scenes moments
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
					<div
						class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg
									class="mx-auto mb-2 h-8 w-8 text-gray-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
									/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div
						class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg
									class="mx-auto mb-2 h-8 w-8 text-gray-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
									/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div
						class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg
									class="mx-auto mb-2 h-8 w-8 text-gray-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
									/>
								</svg>
								<p class="text-xs text-gray-500">Loading Instagram posts...</p>
							</div>
						</div>
					</div>
					<div
						class="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-center">
								<svg
									class="mx-auto mb-2 h-8 w-8 text-gray-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
									/>
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

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready to Work With Us?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Experience the innovation and quality that has made Tecnpipe a leader in the industry since
			2013.
		</p>
		<div class="flex justify-center gap-4">
			<a
				href="/services"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Our Services
			</a>
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
