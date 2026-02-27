import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/data/site'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

export function Footer() {
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
                <Link href="/" className="hover:text-text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <a href="/#faq" className="hover:text-text-primary transition-colors">
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
