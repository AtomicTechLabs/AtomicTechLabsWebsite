import { useEffect } from 'react'

export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    const siteTitle = 'AtomicTechLabs — Robotics & IoT Training, Coimbatore'
    document.title = title ? `${title} | AtomicTechLabs Coimbatore` : siteTitle

    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector)
      if (el && val) el.setAttribute(attr, val)
    }

    setMeta('meta[name="description"]',          'content', description)
    setMeta('meta[property="og:title"]',         'content', title ? `${title} | AtomicTechLabs` : siteTitle)
    setMeta('meta[property="og:description"]',   'content', description)
    setMeta('meta[name="twitter:title"]',        'content', title ? `${title} | AtomicTechLabs` : siteTitle)
    setMeta('meta[name="twitter:description"]',  'content', description)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) { link = document.createElement('link'); link.rel='canonical'; document.head.appendChild(link) }
      link.href = canonical
    }
  }, [title, description, canonical])
}
