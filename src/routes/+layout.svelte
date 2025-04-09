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
			<!-- Logo with home link -->
			<a href="/" class="block">
				<div
					class={`flex h-10 w-40 items-center justify-center ${isTransparent ? 'text-white' : 'bg-gray-200 text-gray-700'}`}
				>
					Logo Placeholder
				</div>
			</a>
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
						href="/products"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Products</a
					>
				</li>
				<li>
					<a
						href="/orders"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Orders</a
					>
				</li>
				<li>
					<a
						href="/hvac"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>HVAC</a
					>
				</li>
				<li>
					<a
						href="/maintenance"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>Maintenance</a
					>
				</li>
				<li>
					<a
						href="/about"
						class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
						>About Us</a
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
							href="/"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Home</a
						>
					</li>
					<li>
						<a
							href="/products"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Products</a
						>
					</li>
					<li>
						<a
							href="/orders"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Orders</a
						>
					</li>
					<li>
						<a
							href="/hvac"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>HVAC</a
						>
					</li>
					<li>
						<a
							href="/maintenance"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>Maintenance</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
							onclick={closeMenu}>About Us</a
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
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">TecnoPipe</h3>
				<p class="mb-2 text-gray-300">123 Industry Drive</p>
				<p class="mb-2 text-gray-300">Manufacturing District</p>
				<p class="mb-2 text-gray-300">Quito, Ecuador 12345</p>
				<p class="mb-2 text-gray-300">
					<a href="tel:(+593) 99-733-1443" class="text-gray-300 hover:text-white">(+593) 99-733-1443</a>
				</p>
				<p class="text-gray-300">
					<a href="mailto:eduardoamador@eduardoamador.com" class="text-gray-300 hover:text-white">eduardoamador@eduardoamador.com</a>
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-300 hover:text-white">Home</a></li>
					<li><a href="/products" class="text-gray-300 hover:text-white">Products</a></li>
					<li><a href="/orders" class="text-gray-300 hover:text-white">Orders</a></li>
					<li><a href="/hvac" class="text-gray-300 hover:text-white">HVAC</a></li>
					<li><a href="/maintenance" class="text-gray-300 hover:text-white">Maintenance</a></li>
					<li><a href="/about" class="text-gray-300 hover:text-white">About Us</a></li>
				</ul>
			</div>

			<!-- Social Media & Newsletter -->
			<div>
				<h3 class="mb-4 text-lg font-semibold sm:text-xl">Connect With Us</h3>
				<div class="mb-6 flex space-x-4">
					<!-- Social Media Icons -->
					<a href="https://www.facebook.com" target="_blank" class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10">
						<span class="text-xs">FB</span>
					</a>
					<a href="https://www.instagram.com/tecnopipe_ec/?hl=en" target="_blank" class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10">
						<span class="text-xs">IG</span>
					</a>
					<a href="https://www.linkedin.com" target="_blank" class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10">
						<span class="text-xs">IN</span>
					</a>
					<a href="https://www.youtube.com" target="_blank" class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 sm:h-10 sm:w-10">
						<span class="text-xs">YT</span>
					</a>
				</div>

				<h4 class="mb-2 font-medium">Subscribe to our newsletter</h4>
			</div>
		</div>

		<div class="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 sm:mt-8 sm:pt-8">
			<p>&copy; 2025 TecnoPipe. All rights reserved.</p>
		</div>
	</div>
</footer>