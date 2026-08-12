export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'finance-blog',
  name: 'Compound',
  origin: 'https://finance-blog.oriz.in',
  tagline: 'Plain money notes for Indian investors and savers',
  description:
    'Compound — plain, practical money notes for Indian investors and savers. Index funds, credit, tax, and building an emergency fund, explained without the sales pitch.',
}
