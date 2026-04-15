import React from "react";
import { Bars } from "../components/Bars";
import { computeBarLayout } from "../core/layout";
import type { AxisLabelConfig, BarDatum } from "../core/types";
import { AxisY } from "../components/AxisY";
import { createLinearScaleWithZeroBase } from "../core/scales";
import { createBandScale } from "../core/bandScale";
import { AxisX } from "../components/AxisX";

type Margin = { top: number, right: number, bottom: number, left: number }

export type BarChartProps = {
    data: BarDatum[]
    width?: number
    height?: number
    gap?: number
    colors?: string[] | ((string: number) => string)
    margin?: Margin
    xAxisLabelConfig?: AxisLabelConfig
    yAxisLabelConfig?: AxisLabelConfig
    xAxisRotate?: number
    showXAxis?: boolean
    showYAxis?: boolean
}

const defaultMargin: Margin = { top: 20, right: 20, bottom: 20, left: 40 }

export function BarChart({
    data,
    width = 300,
    height = 300,
    gap = 2,
    colors = ['#4f46e5'],
    margin = defaultMargin,
    xAxisLabelConfig = {},
    yAxisLabelConfig = {},
    xAxisRotate = 0,
    showXAxis = true,
    showYAxis = true
}: BarChartProps) {

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const labels = data.map(d => d.label)

    const maxValue = React.useMemo(
        () => Math.max(...data.map(d => d.value), 0),
        [data]
    );

    const yScale = React.useMemo(
        () => createLinearScaleWithZeroBase(maxValue, [innerHeight, 0]),
        [maxValue, innerHeight]
    )

    const xScale = React.useMemo(
        () =>
            createBandScale({
                domain: labels,
                range: [0, innerWidth],
                gap
            }),
        [labels, innerWidth, gap]
    );

    const layout = React.useMemo(
        () =>
            computeBarLayout(data,
                {
                    chartWidth: innerWidth,
                    chartHeight: innerHeight,
                    gap,
                }),
        [data, innerWidth, innerHeight, gap]
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

    //Clacular largura máxima baseada no expaço disponível por barra
    const estimatedMaxLabelWidth = React.useMemo(() => {
        return xScale.bandwidth() + gap
    }, [xScale, gap])

    const mergedXAxisConfig = React.useMemo(() => ({
        maxWidth: estimatedMaxLabelWidth,
        overFlowStrategy: 'truncate' as const,
        maxLines: 2,
        ...xAxisLabelConfig
    }), [xAxisLabelConfig, estimatedMaxLabelWidth])

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            role="img"
        >
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {showYAxis && (
                    <AxisY
                        maxValue={maxValue}
                        scale={yScale}
                        height={innerHeight}
                        labelConfig={yAxisLabelConfig}
                    />
                )}
                {showXAxis && (
                    <AxisX
                        scale={xScale}
                        labels={labels}
                        height={innerHeight}
                        rotate={xAxisRotate}
                        labelConfig={mergedXAxisConfig}
                    />
                )}

                <Bars
                    bars={layout}
                    fill={(bar) => getColor(bar.index)} />
            </g>
        </svg>
    )
}