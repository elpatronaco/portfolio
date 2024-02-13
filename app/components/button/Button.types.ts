import { MouseEvent, type ReactNode } from "react"

export type ButtonProps = {
  children: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
  icon?: boolean
  shadowed?: boolean
  disabled?: boolean
  title?: string
}
