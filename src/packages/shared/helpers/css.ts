export function processUnit(unit: string | number) {
    if (typeof unit == "string") {
        return unit
    }

    if (typeof unit == "number") {
        return `${unit}px`
    }
}

export function classNames(...classNames: (string | undefined | Record<string, boolean>)[]) {
    return classNames.map((className) => {
        if (typeof className == "string") {
            return className
        }
        if (typeof className == "object") {
            return Object.keys(className)
                .filter(key => className[key])
                .join(" ")
        }
        return ""
    })
        .join(" ")
        .trim()
}