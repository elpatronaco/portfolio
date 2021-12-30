export function classNames(initialClasses, conditionals) {
    if (!conditionals || !Object.keys(conditionals).length)
        return initialClasses

    const classes = initialClasses.length
        ? initialClasses.trim().split(/\s+/g)
        : []

    if (conditionals) {
        for (const key in conditionals) {
            if (conditionals[key]) {
                classes.push(key)
            }
        }
    }

    return classes.join(' ')
}
