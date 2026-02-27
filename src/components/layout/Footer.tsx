import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/data/site'
import { getWhatsAppNumber } from '@/lib/whatsapp'

export function Footer() {
  const whatsappNumber = getWhatsAppNumber()
  return (
    <footer className="bg-surface border-t border-white/10 text-text-secondary pb-20 md:pb-0 safe-area-pb">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={120}
              height={35}
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm">{site.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 {site.location}</li>
              {whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover underline"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block py-2 min-h-[44px] flex items-center hover:text-text-primary transition-colors touch-manipulation">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="block py-2 min-h-[44px] flex items-center hover:text-text-primary transition-colors touch-manipulation">
                  Catálogo
                </Link>
              </li>
              <li>
                <a href="/#faq" className="block py-2 min-h-[44px] flex items-center hover:text-text-primary transition-colors touch-manipulation">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-text-secondary mt-12 pt-8 border-t border-white/10">
          {site.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
