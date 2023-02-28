import { useNuxtApp } from '#app'
import type { IBotInfo } from '../types/bot'

export default function (): IBotInfo {
  return useNuxtApp().$botInfo
}