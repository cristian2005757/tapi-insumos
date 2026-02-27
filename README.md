# Tapinsumos del Norte

Landing page de muebles modernos: camas, cabeceros, salas. Cotización inteligente por WhatsApp.

## Demo

🔗 [Ver demo en Vercel](https://tapinsumos.vercel.app) _(reemplazar con tu URL)_

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Features

- 🛋️ Catálogo de productos con filtros
- 📱 Cotización por WhatsApp (producto + medidas + color + ciudad)
- 💾 Carrito de cotización en localStorage
- 📸 Galería de entregas reales (carrusel swipe + lightbox)
- ♿ Accesibilidad (aria-labels, semántica, teclado)
- 📱 Bottom bar móvil
- ⚡ Animaciones con `prefers-reduced-motion`
- 🔍 SEO: sitemap, robots, JSON-LD LocalBusiness

## Cómo correr local

```bash
# Instalar
npm install

# Copiar variables de entorno
cp .env.example .env.local
# Editar .env.local con NEXT_PUBLIC_WHATSAPP_NUMBER

# Desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura de carpetas

```
├─ public/images/     # Productos, categorías, UI, deliveries, hero
├─ src/
│  ├─ app/           # Rutas (layout, page, catalogo, producto/[slug])
│  ├─ components/     # layout, home, product, ui
│  ├─ contexts/      # QuoteContext (cotización)
│  ├─ data/          # products, categories, site, faq, testimonials
│  ├─ lib/           # whatsapp, format, filters
│  ├─ hooks/         # useReveal
│  └─ types/
├─ .env.example
└─ package.json
```

## Scripts

| Comando   | Uso                |
|-----------|--------------------|
| `npm run dev`   | Servidor desarrollo |
| `npm run build`  | Build producción    |
| `npm run start`  | Servidor producción |
| `npm run lint`   | ESLint              |
| `npm test`       | Tests               |

## Variables de entorno

| Variable                     | Descripción                          |
|-----------------------------|--------------------------------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp (ej: 573001234567)  |
| `NEXT_PUBLIC_SITE_URL`       | URL base (sitemap, OG)               |

## Performance

Objetivo Lighthouse Performance: **95+**

- Imágenes optimizadas (`next/image`)
- Lazy loading de galerías
- Skeleton loaders
- CSS transforms para animaciones (60fps)

## Licencia

Privado.
