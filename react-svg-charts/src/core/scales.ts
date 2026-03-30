export type LinearScale = (value: number) => number

export type LinearScaleOptions = {
    domain: [number, number]
    range: [number, number]
}

export function createLinearScale(
    options: LinearScaleOptions
): LinearScale {
    const [d0, d1] = options.domain
    const [r0, r1] = options.range

    if (d0 === d1) {
        return () => r0
    }

    const scaleFactor = (r1 - r0) / (d1 - d0)

    return (value: number) => {
        return r0 + (value - d0) * scaleFactor
    }
}

export function createLinearScaleWithZeroBase(
    maxValue: number,
    range: [number, number]
): LinearScale {
    const safeMax = Math.max(0, maxValue)

    return createLinearScale({
        domain: [0, safeMax],
        range
    })
}