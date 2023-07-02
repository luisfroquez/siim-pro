import type { MainNavItem } from '@/types'

import { productCategories } from '@/config/products'
import { slugify } from '@/lib/utils'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'SIIM Distribuidora',
  description:
    'Distribuidora de materiales y equipos en las áreas de detección y extinción de incendios, seguridad electrónica, ferretería y electricidad.',
  url: 'https://distribuidora.siim.cl/',
  ogImage: 'https://skateshop.sadmn.com/opengraph-image.png',
  mainNav: [
    {
      title: 'Productos',
      items: [
        {
          title: 'Ver todos',
          href: '/products',
          description: 'Todos los productos que ofrecemos.',
          items: [],
        },
      ],
    },
    {
      title: 'Blog',
      href: '/blog',
      description: 'Lee nuestros últimos blog posts.',
    },
  ] satisfies MainNavItem[],
  links: {
    linkedin: 'https://www.linkedin.com/company/siim-group/',
    instagram: 'https://www.instagram.com/siim_spa/',
  },
}
