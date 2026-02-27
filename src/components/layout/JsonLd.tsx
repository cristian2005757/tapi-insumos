import { site } from '@/data/site'

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tapinsumos.com'

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
    },
    ...(whatsapp && {
      telephone: `+${whatsapp}`,
      sameAs: [`https://wa.me/${whatsapp}`],
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
