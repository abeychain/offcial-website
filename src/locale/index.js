import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getStore } from '../libs/util'

// import zh from './zh.json'
import en from './en.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  fallbackLocale: 'en',
  silentTranslationWarn: process.env.NODE_ENV !== 'development',
  silentFallbackWarn: process.env.NODE_ENV !== 'development',
  locale: getStore('marcoLang') || 'en',
  messages: {
    en,
    // zh
  }
})

export default i18n
