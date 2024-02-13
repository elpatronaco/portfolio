"use client"

import { createElement } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"

import Button from "../../button/Button"
import { classNames } from "@/helpers"
import { useDarkMode } from "@/hooks"

import type { HeaderProps } from "./Header.types"

export default function Header({ links }: HeaderProps) {
  const pathname = usePathname()
  const darkMode = useDarkMode()

  return (
    <header className="flex justify-between items-center gap-8 sticky z-50 backdrop-blur-md backdrop-saturate-150 rounded-none top-0 m-0 xs:mx-5 xs:top-5 md:mx-0 p-4 pl-6 xs:rounded-xl bg-slate-400/50">
      {links && (
        <nav>
          <ul className="flex gap-5">
            {links.map((link, index) => (
              <li
                key={`nav-link-${link.href}-${index}`}
                className={classNames(
                  "text-md font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 text-black dark:text-white",
                  {
                    "underline underline-offset-4 decoration-2":
                      pathname === link.href,
                  },
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <Button
        icon
        onClick={darkMode.toggleDarkMode}
        title={
          darkMode.isDarkMode ? "Toggle to light mode" : "Toggle to dark mode"
        }
      >
        {createElement(darkMode.isDarkMode ? FaSun : FaMoon, {
          className: "text-xl text-white dark:text-black",
        })}
      </Button>
    </header>
  )
}
