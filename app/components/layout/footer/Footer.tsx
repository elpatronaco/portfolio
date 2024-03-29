"use client"

import { FaChevronUp } from "react-icons/fa"
import { Button } from "@/components"

import type { FooterProps } from "./Footer.types"

export default function Footer({ links }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full border-solid border-t-2 py-12 px-5 md:px-0">
      {links && (
        <div className="grid content-evenly sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2">
          {links.map(({ label, href }) => (
            <a
              key={`footer-link-${label}-${href}`}
              className="w-fit text-lg font-medium text-black dark:text-white hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2"
              href={href}
              target="_blank"
            >
              {label}
            </a>
          ))}
        </div>
      )}
      <div className="flex w-full justify-center mt-12">
        <Button onClick={handleScrollToTop} icon>
          <FaChevronUp className="text-white dark:text-black" />
        </Button>
      </div>
    </footer>
  )
}
