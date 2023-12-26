export type Experience = {
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

export type HomeProps = {
  title: string
  position: string
  description: string
  experiences: Experience[]
  projects: Project[]
}
