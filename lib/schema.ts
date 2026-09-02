import { services, type Service } from './services'

export const SITE_URL = 'https://falseceilingservice.com'
export const BUSINESS_NAME = 'Arbaz – False Ceiling & Interior Services'
export const BUSINESS_PHONE = '+917258951213'
export const BUSINESS_LOGO = `${SITE_URL}/apple-icon`

export const businessAddress = {
  '@type': 'PostalAddress',
  addressLocality: 'Manimajra',
  addressRegion: 'Chandigarh',
  postalCode: '160101',
  addressCountry: 'IN',
} as const

export const areaServed = [
  { '@type': 'City', name: 'Chandigarh' },
  { '@type': 'Place', name: 'Manimajra' },
] as const

export function getOfferCatalog() {
  return {
    '@type': 'OfferCatalog',
    name: 'False Ceiling & Interior Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      itemOffered: { '@type': 'Service', name: s.name, description: s.descriptionEn, areaServed: 'Manimajra, Chandigarh, India' },
    })),
  }
}

export function getLocalBusinessSchema(image: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: BUSINESS_NAME,
    description,
    image,
    logo: BUSINESS_LOGO,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    address: businessAddress,
    areaServed,
    hasOfferCatalog: getOfferCatalog(),
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: BUSINESS_LOGO,
    image: BUSINESS_LOGO,
    contactPoint: [{ '@type': 'ContactPoint', telephone: BUSINESS_PHONE, contactType: 'customer service', areaServed: 'IN', availableLanguage: ['en', 'hi'] }],
  }
}

export function getServiceSchema(service: Pick<Service, 'slug' | 'name' | 'descriptionEn'>, image?: string) {
  const url = `${SITE_URL}/services/${service.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    url,
    description: service.descriptionEn,
    image,
    areaServed,
    provider: {
      '@type': 'GeneralContractor',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
      address: businessAddress,
      hasOfferCatalog: getOfferCatalog(),
    },
    offers: {
      '@type': 'Offer',
      url,
      availability: 'https://schema.org/InStock',
      areaServed: 'Manimajra, Chandigarh',
      itemOffered: { '@type': 'Service', name: service.name, description: service.descriptionEn },
    },
  }
}

export function getBreadcrumbSchema(service: Pick<Service, 'slug' | 'name'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${SITE_URL}/services/${service.slug}` },
    ],
  }
}
