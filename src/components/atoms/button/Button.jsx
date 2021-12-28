import propTypes from 'prop-types'
import { classNames } from '../../../helpers/classnames'

export default function Button({
    children,
    onClick,
    className,
    icon,
    shadowed,
}) {
    return (
        <button
            className={classNames(
                `rounded-full text-md text-white bg-black hover:bg-gray-700/80 dark:bg-white dark:hover:bg-slate-200/50 transition-all duration-300 ${className}`,
                {
                    'py-2 px-5': !icon,
                    'p-3 flex justify-center items-center': icon,
                    'shadow-lg shadow-slate-500/40 hover:shadow-slate-600/40 hover:shadow-xl':
                        shadowed,
                }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.displayName = 'Button'
Button.propTypes = {
    children: propTypes.node,
    onClick: propTypes.func,
    className: propTypes.string,
    icon: propTypes.bool,
    shadowed: propTypes.bool,
}
