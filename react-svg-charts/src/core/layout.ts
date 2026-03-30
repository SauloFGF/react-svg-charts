import type { BarDatum, BarLayout } from './types'
import { createLinearScaleWithZeroBase } from './scales'
import { createBandScale } from './bandScale'

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
        chartWidth = 100,
        chartHeight = 100,
        gap = 2,
    } = options

    if (data.length === 0) return []

    const domain = data.map(d => d.label)

    const maxValue = Math.max(...data.map(d => d.value), 0)

    const xScale = createBandScale({
        domain,
        range: [0, chartWidth],
        gap
    })

    const yScale = createLinearScaleWithZeroBase(
        maxValue,
        [0, chartHeight]
    )

    return data.map((datum, index) => {
        const height = yScale(datum.value)

        return {
            index,
            label: datum.label,
            value: datum.value,
            x: xScale(datum.label, index),
            y: chartHeight - height,
            width: xScale.bandwidth(),
            height
        }
    })
}
