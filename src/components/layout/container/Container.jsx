import React, { Children } from 'react'
import propTypes from 'prop-types'

export function Container({ title, children, separator }) {
    return (
        <div className="flex flex-col gap-10" id={title.toLowerCase()}>
            <h3 className="font-semibold text-3xl dark:text-white">{title}</h3>
            {separator ? (
                Children.map(children, (child) => (
                    <div
                        key={child.id}
                        className="border-b border-gray-800 dark:border-gray-100/80 pb-6"
                    >
                        {child}
                    </div>
                ))
            ) : (
                <div className="grid gap-6 grid-cols-1 xs:grid-cols-auto-fit">
                    {children}
                </div>
            )}
        </div>
    )
}

Container.displayName = 'Container'
Container.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node,
    id: propTypes.string,
}
