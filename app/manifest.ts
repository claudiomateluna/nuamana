// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Guías y Scouts Nua Mana',
    short_name: 'Nua Mana',
    description: 'Una nueva aventura',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable' as 'maskable' | 'monochrome' | 'any' | undefined
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/icon-1024x1024.png',
        sizes: '1024x1024',
        type: 'image/png'
      }
    ],
    orientation: 'portrait',
    lang: 'es',
    dir: 'ltr'
  }
}