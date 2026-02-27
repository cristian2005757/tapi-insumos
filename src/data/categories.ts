export interface Category {
  id: string
  name: string
  slug: string
  icon?: string
}

export const categories = [
  { id: 'camas', name: 'Camas', slug: 'camas' },
  { id: 'cabeceros', name: 'Cabeceros', slug: 'cabeceros' },
  { id: 'salas', name: 'Salas en L', slug: 'salas' },
  { id: 'mesitas', name: 'Mesitas de noche', slug: 'mesitas' },
  { id: 'comedores', name: 'Comedores', slug: 'comedores' },
  { id: 'promos', name: 'Promos / Combos', slug: 'promos' },
]
