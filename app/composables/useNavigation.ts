export type NavigationItem = {
  name: string
  to: string
  icon: string
}

export function useNavigation(): NavigationItem[] {
  return [
    { name: 'Home', to: '/', icon: 'lucide:home' },
    { name: 'Projects', to: '/projects', icon: 'lucide:briefcase' },
    { name: 'About', to: '/about', icon: 'lucide:user' },
  ]
}
