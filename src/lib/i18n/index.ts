import { derived, writable } from 'svelte/store';
import en from './en.json';
import es from './es.json';

// Add more languages here
export const translations = {
  en,
  es,
} as const;

export type Locale = keyof typeof translations;
export const locale = writable<Locale>('en');

function translate(locale: Locale, key: string, vars: Record<string, string | number> = {}) {
  let text = key.split('.').reduce((obj, k) => obj?.[k], translations[locale] as any);

  if (!text) return key;

  Object.keys(vars).forEach((k) => {
    const regex = new RegExp(`{{${k}}}`, 'g');
    text = text.replace(regex, vars[k].toString());
  });

  return text;
}

export const t = derived(locale, ($locale) => (key: string, vars = {}) => 
  translate($locale, key, vars)
);
