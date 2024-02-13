import type { ReactElement } from "react"

export type ContainerProps = {
  title: string
  children: ReactElement[]
  separator?: boolean
}
