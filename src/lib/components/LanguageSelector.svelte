<script>
  import { locale } from 'svelte-i18n';
  
  // Available languages
  const languages = $state([
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ]);
  
  // Show/hide dropdown
  let isOpen = $state(false);
  
  // Toggle dropdown
  function toggleDropdown() {
    isOpen = !isOpen;
  }
  
  // Close dropdown when clicking outside
  function closeDropdown() {
    isOpen = false;
  }
  
  // Change language function
  function changeLanguage(languageCode) {
    locale.set(languageCode);
    localStorage.setItem('preferredLanguage', languageCode);
    isOpen = false;
  }
  
  // Get current language - correct syntax for $derived
  const currentLanguage = $derived(languages.find(lang => lang.code === $locale) || languages[0]);
</script>

<div class="relative inline-block text-left">
  <button 
    type="button" 
    class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
    id="language-menu-button" 
    aria-expanded="true" 
    aria-haspopup="true"
    on:click={toggleDropdown}
  >
    <span class="mr-1">{currentLanguage.flag}</span>
    <span class="hidden sm:inline">{currentLanguage.name}</span>
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>

  {#if isOpen}
    <div 
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10" 
      role="menu" 
      aria-orientation="vertical" 
      aria-labelledby="language-menu-button" 
      tabindex="-1"
    >
      <div class="py-1" role="none">
        {#each languages as language}
          <button 
            on:click={() => changeLanguage(language.code)} 
            class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left {$locale === language.code ? 'bg-gray-100' : ''}" 
            role="menuitem" 
            tabindex="-1"
          >
            <span class="mr-2">{language.flag}</span> {language.name}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<svelte:window on:click|self={closeDropdown}/>