<script>
	import '../app.css';
	// Import mobile menu state
	import { onMount } from 'svelte';
	let { children } = $props();

	// Mobile menu state
	let mobileMenuOpen = $state(false);

	// Toggle mobile menu
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close mobile menu when clicking outside or on a link
	function closeMenu() {
		mobileMenuOpen = false;
	}

	// Close menu on wider screens
	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				mobileMenuOpen = false;
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<header class="fixed z-100 w-full bg-white px-4 shadow-sm sm:px-6 sm:py-4">
	<div class="container mx-auto flex items-center justify-between">
		<div class="logo">
			<!-- Replace with your logo -->
			<div
				class="flex h-8 w-32 items-center justify-center bg-gray-200 text-xs text-gray-500 sm:h-10 sm:w-40 sm:text-sm"
			>
				Logo Placeholder
			</div>
		</div>

		<!-- Mobile menu button -->
		<button class="flex items-center md:hidden" onclick={toggleMobileMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-6 w-6 text-gray-700"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<!-- Desktop navigation -->
		<nav class="hidden md:block">
			<ul class="flex space-x-4 lg:space-x-8">
				<li>
					<a href="#" class="text-sm text-gray-700 hover:text-blue-800 lg:text-base">Products</a>
				</li>
				<li>
					<a href="#" class="text-sm text-gray-700 hover:text-blue-800 lg:text-base">Capabilities</a
					>
				</li>
				<li>
					<a href="#" class="text-sm text-gray-700 hover:text-blue-800 lg:text-base">Our Insights</a
					>
				</li>
				<li>
					<a href="#" class="text-sm text-gray-700 hover:text-blue-800 lg:text-base">About us</a>
				</li>
			</ul>
		</nav>
	</div>

	<!-- Mobile navigation menu -->
	{#if mobileMenuOpen}
		<div class="absolute top-full right-0 left-0 bg-white shadow-md md:hidden">
			<nav class="py-2">
				<ul class="flex flex-col">
					<li>
						<a
							href="#"
							class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
							onclick={closeMenu}>Products</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
							onclick={closeMenu}>Capabilities</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
							onclick={closeMenu}>Our Insights</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-800"
							onclick={closeMenu}>About us</a
						>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>

<!-- Add padding to main to account for fixed header -->
<main class="pt-2 sm:pt-2">
	{@render children()}
</main>

<!-- Footer -->
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
