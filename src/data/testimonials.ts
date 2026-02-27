export interface Testimonial {
  id: string
  text: string
  name: string
  lastName: string
  city: string
  product: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Quedó hermosa la cama, excelente acabado.',
    name: 'Diana',
    lastName: 'Rodríguez',
    city: 'Cúcuta',
    product: 'Cama Milano',
    rating: 5,
  },
  {
    id: '2',
    text: 'Excelente calidad, muy contentos con la sala.',
    name: 'Carlos',
    lastName: 'Martínez',
    city: 'Cúcuta',
    product: 'Sala Estilo Nordico',
    rating: 5,
  },
  {
    id: '3',
    text: 'El cabecero quedó perfecto, gran servicio.',
    name: 'María',
    lastName: 'González',
    city: 'Cúcuta',
    product: 'Cabecero Moderno',
    rating: 5,
  },
]
