import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bdt-sarl.com'
  const lastModified = new Date()

  // Routes statiques
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/devis',
    '/confidentialite',
    '/mentions-legales',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Services dynamiques
  const services = [
    'videosurveillance',
    'informatique',
    'acces',
    'cybersecurite',
    'cloud',
    'audit',
  ].map((id) => ({
    url: `${baseUrl}/services/${id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...services]
}
