<!-- src/routes/+page.svelte -->
<script>
	// Your script logic here
</script>

<!-- Hero Section - Improved for mobile but preserving desktop layout -->
<section class="hero flex min-h-screen w-full flex-col justify-center bg-white">
	<div class="container mx-auto px-4 sm:px-6">
		<!-- Mobile-optimized version (hidden on larger screens) -->
		<div class="flex flex-col items-center text-center md:hidden">
			<h1 class="mb-2 text-4xl font-bold text-blue-900 sm:text-5xl">TECNO PIPE</h1>
			<h1 class="mb-6 text-4xl font-bold text-blue-900 sm:text-5xl">SOLUTIONS</h1>

			<p class="mb-6 max-w-md text-gray-700">
				Industry-leading pipe solutions for residential and commercial applications.
			</p>

			<!-- Hero image placeholder -->
			<div class="relative mb-8 h-56 w-full rounded-lg bg-gray-200 shadow-md sm:h-64">
				<img src="images/hero.png" alt="hero" class="h-full w-full object-cover" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
			</div>

			<div class="flex gap-4">
				<a
					href="#services"
					class="rounded-md bg-blue-800 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-900"
				>
					Our Services
				</a>
				<a
					href="#contact"
					class="rounded-md border border-blue-800 bg-white px-5 py-2 font-medium text-blue-800 transition-colors hover:bg-blue-50"
				>
					Contact Us
				</a>
			</div>
		</div>

		<!-- Desktop version (original layout, hidden on mobile) -->
		<div class="hidden md:flex md:flex-col">
			<h1 class="mb-2 text-6xl font-bold text-blue-900 lg:text-8xl">TECNO PIPE</h1>
			<h1 class="mb-10 text-6xl font-bold text-blue-900 lg:text-8xl">SOLUTIONS</h1>

			<!-- Hero image placeholder - Takes up most of the viewport -->
			<div class="relative h-[600px] w-full bg-gray-200">
				<img src="images/hero.png" alt="hero" class="h-full w-full object-cover" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
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

<!-- Services Section -->
<section class="services bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-xl font-medium sm:text-2xl md:mb-16">BRINGING THE BEST TO OUR CLIENTS</h2>

		<!-- Responsive layout - stacked on mobile, side by side on desktop -->
		<div class="flex flex-col md:flex-row">
			<!-- Left side - Image placeholder -->
			<div class="mb-8 flex w-full items-center md:mb-0 md:w-1/3 md:pr-8">
				<div
					class="flex h-64 w-full items-center justify-center rounded bg-blue-200 text-gray-600 md:h-80"
				>
					Featured Image Placeholder
				</div>
			</div>

			<!-- Right side - Service list -->
			<div class="w-full md:w-2/3">
				<div class="grid grid-cols-1 gap-4">
					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">INDUSTRIAL PIPES</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">RESIDENTIAL SOLUTIONS</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">INSTALLATION</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">MAINTENANCE</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">CUSTOM SOLUTIONS</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">CONSULTING & DESIGN</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-gray-300 py-3">
						<span class="font-medium">EMERGENCY REPAIRS</span>
						<span class="text-xl">→</span>
					</div>

					<div class="flex items-center justify-between border-t border-b border-gray-300 py-3">
						<span class="font-medium">SUSTAINABILITY</span>
						<span class="text-xl">→</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
