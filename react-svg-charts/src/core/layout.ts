import type { BarDatum, BarLayout } from './types'

export type BarLayoutOptions = {
    chartWidth?: number
    chartHeight?: number
    gap?: number
}

export function computeBarLayout(
    data: BarDatum[],
    options: BarLayoutOptions = {}
): BarLayout[] {
    const {
        chartWidth = 1000,
        chartHeight = 100,
        gap = 2,
    } = options

    if (data.length === 0) return []

    const maxValue = Math.max(...data.map(d => d.value), 0)
    const barWidth = chartWidth / data.length

    return data.map((datum, index) => {
        const normalizedValue = maxValue === 0 ? 0 : datum.value / maxValue
        const height = normalizedValue * chartHeight

        return {
            index,
            label: datum.label,
            value: datum.value,
            x: index * barWidth,
            y: chartHeight - height,
            width: barWidth - gap,
            height
        }
    })
}
