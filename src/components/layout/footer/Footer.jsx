import propTypes from 'prop-types'
import { FaChevronUp } from 'react-icons/fa'
import { classNames } from '../../../helpers/classnames'
import { useDarkMode } from '../../../hooks/useDarkMode'
import Button from '../../atoms/button/Button'

export default function Footer({ links }) {
    const darkMode = useDarkMode()

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="w-full border-solid border-t-2 py-12 px-5 md:px-0">
            {links && (
                <div
                    className={classNames(
                        'grid content-evenly sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2'
                    )}
                >
                    {links.map(({ label, href }) => (
                        <a
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

Footer.displayName = 'Header'
Footer.propTypes = {
    links: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            href: propTypes.string.isRequired,
        })
    ),
}
