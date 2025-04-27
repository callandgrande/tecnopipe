<script>
	import '../app.css';
	import { i18nReady } from '../lib/i18n'; // Import to initialize i18n
	import { locale, _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	let i18nLoaded = $state(false);

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
		// Wait for i18n to load
		i18nReady.then(() => {
			i18nLoaded = true;
		});
		
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
	
	// Basic language switching functionality directly in layout
	const languages = [
		{ code: 'en', name: 'English', flag: '🇬🇧' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'de', name: 'Deutsch', flag: '🇩🇪' }
	];
	
	let isLanguageMenuOpen = $state(false);
	
	// Toggle language dropdown
	function toggleLanguageMenu() {
		isLanguageMenuOpen = !isLanguageMenuOpen;
	}
	
	// Change language function
	function changeLanguage(languageCode) {
		locale.set(languageCode);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('preferredLanguage', languageCode);
		}
		isLanguageMenuOpen = false;
	}
	
	// Get current language
	const currentLanguage = $derived(languages.find(lang => lang.code === $locale) || languages[0]);
	
	// Update HTML lang attribute when locale changes
	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = $locale;
		}
	});
</script>

{#if i18nLoaded}
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
					<img src="/images/tecnopipe-logo.png" alt="TecnoPipeLogo" class="h-10" />
					</div>
				</a>
			</div>

			<!-- Mobile menu button with language selector -->
			<div class="flex items-center space-x-4 md:hidden">
				<!-- Inline language selector -->
				<div class="relative inline-block text-left">
					<button 
						type="button" 
						class="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
						onclick={toggleLanguageMenu}
					>
						<span class="mr-1">{currentLanguage.flag}</span>
						<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>

					{#if isLanguageMenuOpen}
						<div 
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10" 
							role="menu"
						>
							<div class="py-1" role="none">
								{#each languages as language}
									<button 
										onclick={() => changeLanguage(language.code)} 
										class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left {$locale === language.code ? 'bg-gray-100' : ''}" 
										role="menuitem" 
									>
										<span class="mr-2">{language.flag}</span> {language.name}
									</button>
								{/each}
							</div>
						</div>
					{/if}
				</div>
				
				<button class="flex items-center" onclick={toggleMobileMenu}>
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
			</div>

			<!-- Desktop navigation with language selector -->
			<nav class="hidden md:flex md:items-center">
				<ul class="flex space-x-6 lg:space-x-8">
					<li>
						<a
							href="/products"
							class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
							>{$_('nav.products', { default: 'Products' })}</a
						>
					</li>
					<li>
						<a
							href="/orders"
							class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
							>{$_('nav.orders', { default: 'Orders' })}</a
						>
					</li>
					<li>
						<a
							href="/hvac"
							class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
							>{$_('nav.hvac', { default: 'HVAC' })}</a
						>
					</li>
					<li>
						<a
							href="/maintenance"
							class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
							>{$_('nav.maintenance', { default: 'Maintenance' })}</a
						>
					</li>
					<li>
						<a
							href="/about"
							class={`text-sm font-medium transition-colors lg:text-base ${isTransparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-800'}`}
							>{$_('nav.about', { default: 'About Us' })}</a
						>
					</li>
					<li class="ml-4">
						<!-- Inline language selector for desktop -->
						<div class="relative inline-block text-left">
							<button 
								type="button" 
								class="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
								onclick={toggleLanguageMenu}
							>
								<span class="mr-1">{currentLanguage.flag}</span>
								<span class="hidden sm:inline">{currentLanguage.name}</span>
								<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</button>

							{#if isLanguageMenuOpen}
								<div 
									class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10" 
									role="menu"
								>
									<div class="py-1" role="none">
										{#each languages as language}
											<button 
												onclick={() => changeLanguage(language.code)} 
												class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left {$locale === language.code ? 'bg-gray-100' : ''}" 
												role="menuitem" 
											>
												<span class="mr-2">{language.flag}</span> {language.name}
											</button>
										{/each}
									</div>
								</div>
							{/if}
						</div>
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
								onclick={closeMenu}>{$_('nav.home', { default: 'Home' })}</a
							>
						</li>
						<li>
							<a
								href="/products"
								class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
								onclick={closeMenu}>{$_('nav.products', { default: 'Products' })}</a
							>
						</li>
						<li>
							<a
								href="/orders"
								class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
								onclick={closeMenu}>{$_('nav.orders', { default: 'Orders' })}</a
							>
						</li>
						<li>
							<a
								href="/hvac"
								class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
								onclick={closeMenu}>{$_('nav.hvac', { default: 'HVAC' })}</a
							>
						</li>
						<li>
							<a
								href="/maintenance"
								class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
								onclick={closeMenu}>{$_('nav.maintenance', { default: 'Maintenance' })}</a
							>
						</li>
						<li>
							<a
								href="/about"
								class="block px-6 py-3 text-white hover:bg-black/80 hover:text-blue-300"
								onclick={closeMenu}>{$_('nav.about', { default: 'About Us' })}</a
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
					<p class="mb-2 text-gray-300">Av. NNUU E230 y Núñez de Vela</p>
					<p class="mb-2 text-gray-300">Edificio Metropolitano, Of. 309</p>
					<p class="mb-2 text-gray-300">Quito, Ecuador</p>
					<p class="mb-2 text-gray-300">
						<a href="tel:(+593) 98-966-0516" class="text-gray-300 hover:text-white">(+593) 98-966-0516</a>
					</p>
					<p class="text-gray-300">
						<a href="mailto:eduardoamador@eduardoamador.com" class="text-gray-300 hover:text-white">eduardoamador@eduardoamador.com</a>
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="mb-4 text-lg font-semibold sm:text-xl">{$_('footer.quickLinks', { default: 'Quick Links' })}</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-gray-300 hover:text-white">{$_('nav.home', { default: 'Home' })}</a></li>
						<li><a href="/products" class="text-gray-300 hover:text-white">{$_('nav.products', { default: 'Products' })}</a></li>
						<li><a href="/orders" class="text-gray-300 hover:text-white">{$_('nav.orders', { default: 'Orders' })}</a></li>
						<li><a href="/hvac" class="text-gray-300 hover:text-white">{$_('nav.hvac', { default: 'HVAC' })}</a></li>
						<li><a href="/maintenance" class="text-gray-300 hover:text-white">{$_('nav.maintenance', { default: 'Maintenance' })}</a></li>
						<li><a href="/about" class="text-gray-300 hover:text-white">{$_('nav.about', { default: 'About Us' })}</a></li>
					</ul>
				</div>

				<!-- Social Media & Newsletter -->
				<div>
					<h3 class="mb-4 text-lg font-semibold sm:text-xl">{$_('footer.connectWithUs', { default: 'Connect With Us' })}</h3>
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

					<h4 class="mb-2 font-medium">{$_('footer.subscribeNewsletter', { default: 'Subscribe to our newsletter' })}</h4>
				</div>
			</div>

			<div class="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 sm:mt-8 sm:pt-8">
				<p>&copy; {new Date().getFullYear()} TecnoPipe. All rights reserved.</p>
			</div>
		</div>
	</footer>
{:else}
	<div class="flex h-screen items-center justify-center">
		<p class="text-lg">Loading...</p>
	</div>
{/if}