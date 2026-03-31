import type { BandScale } from "../core/bandScale";

export type AxisXProps = {
    scale: BandScale
    labels: string[]
    height: number
    tickSize?: number
    fontSize?: number
    rotate?: number
}

export function AxisX({
    scale,
    labels,
    height,
    tickSize = 6,
    fontSize = 10,
    rotate = 0
}: AxisXProps) {
    return (
        <g transform={`translate(0, ${height})`}>
            <line
                x1={0}
                y1={0}
                x2={labels.length ? scale(labels[labels.length - 1]) + scale.bandwidth() : 0}
                y2={0}
                stroke="currentColor"
            />

            {labels.map((label) => {
                const x = scale(label) + scale.bandwidth() / 2;

                return (
                    <g key={label} transform={`translate(${x}, 0)`}>
                        <line y2={tickSize} stroke="currentColor" />
                        <text
                            y={tickSize + 4}
                            fontSize={fontSize}
                            textAnchor="middle"
                            dominantBaseline="hanging"
                            transform={rotate ? `rotate(${rotate})` : undefined}>
                            {label}
                        </text>
                    </g>
                )
            })}

        </g>
    )
}