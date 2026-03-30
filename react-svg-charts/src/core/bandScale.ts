export type BandScale = {
    (value: string, fallbackIndex?: number): number
    bandwidth: () => number
}

export type BandScaleOptions = {
    domain: string[]
    range: [number, number]
    gap?: number
}

export function createBandScale(
    options: BandScaleOptions
): BandScale {
    const { domain, range, gap = 2 } = options
    const [start, end] = range

    if (domain.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const scale = ((_) => start) as BandScale
        scale.bandwidth = () => 0
        return scale
    }

    const totalWidth = end - start
    const bandWidth = totalWidth / domain.length
    const innerWidth = Math.max(0, bandWidth - gap)

    const indexByValue = new Map<string, number>(
        domain.map((value, index) => [value, index])
    )

    const scale: BandScale = ((
        value: string,
        fallbackIndex = 0
    ) => {
        const index = indexByValue.get(value) ?? fallbackIndex
        return start + index * bandWidth
    }) as BandScale

    scale.bandwidth = () => innerWidth

    return scale
}