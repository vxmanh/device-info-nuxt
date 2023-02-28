import { useNuxtApp } from '#app'
import type { Device } from '../types/device'

export default function (): Device {
  return useNuxtApp().$deviceInfo
}