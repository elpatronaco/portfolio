import { useEffect, useRef } from "react"

export type UseMounted = boolean

export function useMounted(): UseMounted {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  return mounted.current
}
