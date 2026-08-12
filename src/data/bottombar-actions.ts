import type { BottomBarAction } from '~/components/chrome/BottomBar.astro'

export const bottomBarActions: BottomBarAction[] = [
  { icon: 'desk', label: 'Desk', href: '/' },
  { icon: 'blotter', label: 'Blotter', href: '/blog/' },
  { icon: 'pos', label: 'Positions', href: '/series/' },
  { icon: 'find', label: 'Search', href: '/search/' },
  { icon: 'watch', label: 'Watchlist', href: '#sb-toggle' },
]
