import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { resolve } from 'path'
export interface ModuleOptions {
  enabled: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'device-info',
    configKey: 'deviceInfo'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    enabled: true,
  },
  setup (options, nuxt) {
    if (options.enabled) {
      nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, {
        enabled: options.enabled
      })
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
      nuxt.hook('imports:dirs', (dirs) => {
        dirs.push(resolve(runtimeDir, 'composables'))
      })
    }
  }
})
