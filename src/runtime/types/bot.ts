import { Request } from 'express'

// NOTE - Bot information interface
export interface IBotInfo {
  name?: string
  isBot: boolean
}

// NOTE - IP information interface
export interface IIPInfo {
  range: Array<number>
  country: string
  region: string
  eu: string
  timezone: string
  city: string
  ll: Array<number>
  metro: number
  area: number
}

// NOTE - Device information interface
export interface IDeviceInfo {
  type: string
  isMobile: boolean | string
  os: string
  browser: string
}

// NOTE - Custom interface for request param
export type IRequestCustomize = {
  botInfo?: IBotInfo
  ipInfo?: IIPInfo
  deviceInfo?: IDeviceInfo
}

// NOTE - Request SSR Info interface
export interface IReqSSRInfo {
  redirect?: {
    statusCode: number
    location: string
    important: boolean
  }

  statusCode: {
    value: 200
    important: boolean
  }
}

// NOTE - Redirect info interface
export interface IRedirectInfo {
  statusCode: 200 | 301 | 302 | 404
  location?: string
  path?: string
}

// NOTE - Set cookie info
export interface ICookieInfo {
  locale: string | undefined
}
