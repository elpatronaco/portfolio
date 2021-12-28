import { useEffect, useState } from 'react'

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        const isDark = root.classList.contains('dark')

        setIsDarkMode(isDark)
    }, [])

    const toggleDarkMode = () => {
        const root = document.documentElement
        root.classList.toggle('dark')
        setIsDarkMode(!isDarkMode)
    }

    return { isDarkMode, toggleDarkMode }
}
