import { browser } from '$app/environment';
import { locale } from '$lib/i18n';

// Initialize locale from browser or cookie if available
export const load = async () => {
  if (browser) {
    const savedLocale = localStorage.getItem('locale') || navigator.language.split('-')[0];
    if (savedLocale === 'es') {
      locale.set('es');
    } else {
      locale.set('en');
    }
  }
};
