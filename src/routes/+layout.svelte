<script>
	import '../app.css';
	// Import mobile menu state
	import { onMount } from 'svelte';
	let { children } = $props();

	// Mobile menu state
	let mobileMenuOpen = $state(false);
	// Header transparency state (for scrolling effect)
	let isTransparent = $state(true);

	// Toggle mobile menu
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close mobile menu when clicking outside or on a link
	function closeMenu() {
		mobileMenuOpen = false;
	}

	// Handle scroll for header transparency
	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				isTransparent = false;
			} else {
				isTransparent = true;
			}
		};

		// Close menu on wider screens
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				mobileMenuOpen = false;
			}
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		// Initialize scroll state
		handleScroll();

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class={`fixed z-100 w-full transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white/95 shadow-sm'}`}
>
	<div class="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
		<div class="logo">
			<!-- Replace with your logo -->
			<div
				class={`flex h-10 w-40 items-center justify-center ${isTransparent ? 'text-white' : 'bg-gray-200 text-gray-700'}`}
			>
				Logo Placeholder
			</div>
		</div>

		<!-- Mobile menu button -->
		<button class="flex items-center md:hidden" onclick={toggleMobileMenu}>
			<div class={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
				<!-- Simple hamburger/X icon using borders instead of SVG -->
				{#if mobileMenuOpen}
					<div class="relative h-6 w-6">
						<div class="absolute top-3 left-0 h-0.5 w-6 rotate-45 transform bg-current"></div>
						<div class="absolute top-3 left-0 h-0.5 w-6 -rotate-45 transform bg-current"></div>
					</div>
				{:else}
					<div class="relative h-6 w-6">
						<div class="absolute top-1 left-0 h-0.5 w-6 bg-current"></div>
						<div class="absolute top-3 left-0 h-0.5 w-6 bg-current"></div>
						<div class="absolute top-5 left-0 h-0.5 w-6 bg-current"></div>
					</div>
				{/if}
			</div>
		</button>

		<!-- Desktop navigation -->
		<nav class="hidden md:block">
			<ul class="flex space-x-6 lg:space-x-8">
				<li>
					<a
						href="#"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Products</a
					>
				</li>
				<li>
					<a
						href="#"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Capabilities</a
					>
				</li>
				<li>
					<a
						href="#"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Our Insights</a
					>
				</li>
				<li>
					<a
						href="#"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>About us</a
					>
				</li>
			</ul>
		</nav>
	</div>

	<!-- Mobile navigation menu -->
	{#if mobileMenuOpen}
		<div class="absolute top-full right-0 left-0 bg-black/90 md:hidden">
			<nav class="py-2">
				<ul class="flex flex-col">
					<li>
						<a
							href="#"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Products</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Capabilities</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Our Insights</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>About us</a
						>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>

<!-- Remove padding from main to allow hero to start at the top -->
<main>
	{@render children()}
</main>

<!-- Footer remains unchanged -->
<footer class="bg-gray-800 py-8 text-white sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Company Info -->
			<div>
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">Tecno Pipe Solutions</h3>
				<p class="mb-2 text-gray-300">123 Industry Drive</p>
				<p class="mb-2 text-gray-300">Manufacturing District</p>
				<p class="mb-2 text-gray-300">Business City, BC 12345</p>
				<p class="mb-2 text-gray-300">Phone: (555) 123-4567</p>
				<p class="text-gray-300">Email: info@tecnopipe.com</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="#" class="text-gray-300 hover:text-white">Products</a></li>
					<li><a href="#" class="text-gray-300 hover:text-white">Services</a></li>
					<li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
					<li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
					<li><a href="#" class="text-gray-300 hover:text-white">Careers</a></li>
				</ul>
			</div>

			<!-- Social Media & Newsletter -->
			<div>
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">Connect With Us</h3>
				<div class="mb-6 flex space-x-4">
					<!-- Social Media Icons -->
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10"
					>
						<span class="text-xs">FB</span>
					</div>
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10"
					>
						<span class="text-xs">TW</span>
					</div>
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10"
					>
						<span class="text-xs">IN</span>
					</div>
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10"
					>
						<span class="text-xs">YT</span>
					</div>
				</div>

				<h4 class="mb-2 font-medium">Subscribe to our newsletter</h4>
			</div>
		</div>

		<div class="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 sm:mt-8 sm:pt-8">
			<p>&copy; 2025 Tecno Pipe Solutions. All rights reserved.</p>
		</div>
	</div>
</footer>
