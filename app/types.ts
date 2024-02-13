export type Experience = {
  id: string
  company: string
  position: string
  description: string
  date: {
    from: string
    to: string
  }
}

export type Project = {
  title: string
  description: string
  href: string
  bgColor: string
  bgHoverColor: string
  bgImage: string
}

export type HomeData = {
  title: string
  position: string
  description: string
  experiences: Experience[]
  projects: Project[]
}

export type Link = {
  label: string
  href: string
}

export type LayoutData = {
  headerLinks: Link[]
  footerLinks: Link[]
}
