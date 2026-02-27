# Tapinsumos del Norte

Landing page de muebles modernos: camas, cabeceros, salas y comedores. Cotización por WhatsApp.

**Demo:** [tapi-insumos.vercel.app](https://tapi-insumos.vercel.app)

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

---

## Características

- 🛋️ Catálogo de productos con filtros por categoría y búsqueda
- 📱 Cotización por WhatsApp (producto, medidas, color, ciudad)
- 💾 Carrito de cotización en `localStorage`
- 📱 Diseño responsive (Bottom bar móvil, 1 columna en celulares)
- ♿ Accesibilidad (aria-labels, semántica, focus, teclado)
- ⚡ Animaciones con respeto a `prefers-reduced-motion`
- 🔍 SEO: sitemap, robots.txt, JSON-LD LocalBusiness

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar y configurar variables de entorno
cp .env.example .env.local
# Editar .env.local: NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567

# Servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Comando         | Descripción            |
|-----------------|------------------------|
| `npm run dev`   | Servidor de desarrollo |
| `npm run build` | Build de producción    |
| `npm run start` | Servidor producción   |
| `npm run lint`  | Linter                 |
| `npm test`      | Tests (Vitest)         |

---

## Variables de entorno

| Variable                     | Descripción                         |
|-----------------------------|-------------------------------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp (ej: 573001234567) |
| `NEXT_PUBLIC_SITE_URL`       | URL base (sitemap, OG)              |

---

## Estructura del proyecto

```
├─ public/images/     # Productos, hero, promo, logo
├─ src/
│  ├─ app/            # Rutas: layout, page, catalogo, producto/[slug]
│  ├─ components/     # layout, home, product, ui
│  ├─ contexts/      # QuoteContext (cotización)
│  ├─ data/          # products, categories, site, faq, testimonials
│  ├─ lib/           # whatsapp, filters
│  ├─ hooks/         # useReveal
│  └─ types/
├─ .env.example
└─ package.json
```

---

## Licencia

Privado.
