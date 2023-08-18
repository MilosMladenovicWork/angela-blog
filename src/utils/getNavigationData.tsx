export interface NavigationData {
  navigationLinks: NavigationLink[]
}

export interface NavigationLink {
  text: string
  href: string
}

export function getNavigationData(): NavigationData {
  const navigationData: NavigationData = {
    navigationLinks: [
      { text: "about", href: "/about" },
      { text: "contact", href: "/contact" },
    ],
  }

  return navigationData
}
