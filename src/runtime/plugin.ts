import { defineNuxtPlugin, useRequestHeaders } from '#app'
import { reactive } from 'vue'
import generateFlags from './generateFlags'
import getBotInfo from './getBotInfo'
export default defineNuxtPlugin((nuxtApp) => {
  // Server Side
  const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
  if (nuxtApp.ssrContext) {
    const headers = useRequestHeaders()
    const userAgent = headers['user-agent'] || DEFAULT_USER_AGENT
    const flags = reactive(generateFlags(headers, userAgent))
    const bot = getBotInfo(userAgent)
    return {
      provide: {
        deviceInfo: flags,
        botInfo: bot
      }
    }
  }

  // Client Side
  const userAgent = navigator.userAgent
  const flags = reactive(generateFlags({}, userAgent))
  const bot = getBotInfo(userAgent)
  return {
    provide: {
      deviceInfo: flags,
      botInfo: bot
    }
  }
})