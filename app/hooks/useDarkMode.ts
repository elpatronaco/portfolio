import { useEffect, useState } from "react"

export type UseDarkMode = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export function useDarkMode(): UseDarkMode {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const isDark = root.classList.contains("dark")

    setIsDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const root = document.documentElement
    root.classList.toggle("dark")
    setIsDarkMode(!isDarkMode)
  }

  return { isDarkMode, toggleDarkMode }
}
