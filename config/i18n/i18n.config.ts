import en from './locales/en.json'
import vi from './locales/vi.json'

export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  messages: {
    en,
    vi
  }
}))