import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';

// Register locales with their translations
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));
register('de', () => import('./locales/de.json'));

// Determine the initial locale based on browser settings or localStorage
function getInitialLocale() {
  if (!browser) return 'en'; // Default for SSR

  // Check if user has previously selected a language
  const savedLocale = localStorage.getItem('preferredLanguage');
  if (savedLocale) {
    return savedLocale;
  }
  
  // Otherwise, try to detect from browser
  const browserLocale = navigator.language.split('-')[0];
  
  // Check if browserLocale is supported, if not return fallback
  if (['en', 'es', 'de'].includes(browserLocale)) {
    return browserLocale;
  }
  
  return 'en'; // Default fallback
}

// Initialize the i18n library
init({
  fallbackLocale: 'en',
  initialLocale: getInitialLocale(),
});

// Export a promise that resolves when the initial locale has been loaded
export const i18nReady = browser ? waitLocale() : Promise.resolve();