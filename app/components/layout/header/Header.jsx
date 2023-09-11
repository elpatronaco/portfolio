import { useRouter } from "next/router"
import propTypes from "prop-types"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"
import Button from "../../button/Button"
import { classNames } from "../../../helpers/classnames"
import { useDarkMode } from "../../../hooks/useDarkMode"
import { createElement } from "react"

export default function Header({ links }) {
  const { pathname } = useRouter()
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
      <Button icon onClick={darkMode.toggleDarkMode}>
        {createElement(darkMode.isDarkMode ? FaSun : FaMoon, {
          className: "text-xl text-white dark:text-black",
        })}
      </Button>
    </header>
  )
}

Header.displayName = "Header"
Header.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
    }),
  ),
  toggleDarkMode: propTypes.func,
}
