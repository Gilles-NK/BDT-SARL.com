import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // On utilise l'URL finale, mais Google accepte généralement si le fichier est accessible.
  const baseUrl = 'https://bdt-sarlcom.vercel.app'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/devis',
    '/confidentialite',
    '/mentions-legales',
    '/services/videosurveillance',
    '/services/informatique',
    '/services/acces',
    '/services/cybersecurite',
    '/services/cloud',
    '/services/audit',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))
}
