import React from "react";
import { Bars } from "../components/Bars";
import { computeBarLayout } from "../core/layout";
import type { BarDatum } from "../core/types";

export type BarChartProps = {
    data: BarDatum[]
    width?: number
    height?: number
    gap?: number
    colors?: string[] | ((string: number) => string)
}

export function BarChart({
    data,
    width = 300,
    height = 300,
    gap = 2,
    colors = ['#4f46e5'],
}: BarChartProps) {
    const layout = React.useMemo(() =>
        computeBarLayout(data,
            {
                chartWidth: 100,
                chartHeight: 100,
                gap,
            }),
        [data, gap]
    )

    const getColor = React.useCallback(
        (index: number) => {
            if (typeof colors === 'function') {
                return colors(index)
            }
            return colors[index % colors.length]
        },
        [colors]
    )

    return (
        <svg viewBox="0 0 100 100"
            width={width}
            height={height}
            role="img"
        >
            <Bars
                bars={layout}
                fill={(bar) => getColor(bar.index)}
            />
        </svg>
    )
}