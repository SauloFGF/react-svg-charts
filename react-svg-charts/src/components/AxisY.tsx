import type { LinearScale } from "../core/scales"
import { formatLabel } from "../core/textUtils";
import type { AxisLabelConfig } from "../core/types";

export type AxisYProps = {
    scale: LinearScale;
    height: number;
    maxValue: number;
    ticks?: number;
    tickSize?: number;
    fontSize?: number;
    labelConfig?: AxisLabelConfig
}

function generateTicks(max: number, count: number): number[] {
    if (count <= 0) return [];
    const step = max / count
    return Array.from({ length: count + 1 }, (_, i) => i * step)
}

export function AxisY({
    scale,
    height,
    maxValue,
    ticks = 5,
    tickSize = 6,
    fontSize = 10,
    labelConfig = {}
}: AxisYProps) {
    const values = generateTicks(maxValue, ticks);

    const formatValue = (value: number, index: number) => {
        const formatted = formatLabel(String(Math.round(value)), index, labelConfig)
        return labelConfig?.formatter ? formatted : Math.round(value).toString()
    }

    return (
        <g>
            <line
                x1={0}
                y1={0}
                x2={0}
                y2={height}
                stroke="currentColor"
            />

            {values.map((value, index) => {
                const y = scale(value)
                const displayText = formatValue(value, index)

                return (
                    <g key={value} transform={`translate(0, ${y})`}>
                        <line
                            x1={0}
                            x2={-tickSize}
                            y1={0}
                            y2={0}
                            stroke="currentColor"
                        />
                        <text
                            x={-tickSize - 4}
                            y={0}
                            fontSize={fontSize}
                            textAnchor="end"
                            dominantBaseline="middle"
                        >
                            {displayText}
                        </text>
                    </g>
                )
            })}
        </g>
    )
}