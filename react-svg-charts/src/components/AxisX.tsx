import type { BandScale } from "../core/bandScale";
import type { AxisLabelConfig } from "../core/types";
import { truncateText, wrapText, formatLabel } from "../core/textUtils";
import React from 'react';

export type AxisXProps = {
    scale: BandScale
    labels: string[]
    height: number
    tickSize?: number
    fontSize?: number
    rotate?: number
    labelConfig?: AxisLabelConfig
}

export function AxisX({
    scale,
    labels,
    height,
    tickSize = 6,
    fontSize = 10,
    rotate = 0,
    labelConfig = {}
}: AxisXProps) {
    const {
        maxWidth,
        maxLines = 2,
        overflowStrategy = 'truncate',
        lineHeight = fontSize * 1.2
    } = labelConfig

    const processedLabels = React.useMemo(() => {
        return labels.map((label, index) => {
            const formatted = formatLabel(label, index, labelConfig)

            if (!maxWidth) return { text: formatted, lines: [formatted] }

            switch (overflowStrategy) {
                case 'wrap':
                    return {
                        text: formatted,
                        lines: wrapText(formatted, maxWidth, fontSize, maxLines)
                    }
                case 'truncate':
                    return {
                        text: truncateText(formatted, maxWidth, fontSize, 'truncate'),
                        lines: [truncateText(formatted, maxWidth, fontSize, 'truncate')]
                    }
                case 'ellipsis':
                    return {
                        text: truncateText(formatted, maxWidth, fontSize, 'ellipsis'),
                        lines: [truncateText(formatted, maxWidth, fontSize, 'ellipsis')]
                    }
                case 'hide':
                    return {
                        text: formatted.length * fontSize * 0.6 > maxWidth ? '' : formatted,
                        lines: formatted.length * fontSize * 0.6 > maxWidth ? [] : [formatted]
                    }
                case 'rotate':
                    return { text: formatted, lines: [formatted] }
                default:
                    return { text: formatted, lines: [formatted] }
            }
        })
    }, [labels, labelConfig, maxWidth, fontSize, overflowStrategy, maxLines])

    const renderLabel = (lines: string[], x: number, y: number) => {
        if (overflowStrategy === 'rotate' && rotate !== 0) {
            return (
                <text
                    y={y}
                    fontSize={fontSize}
                    textAnchor={overflowStrategy === 'rotate' ? 'end' : 'middle'}
                    dominantBaseline="hanging"
                    transform={`rotate(${rotate})`}
                >
                    {lines[0]}
                </text>
            )
        }

        if (lines.length === 0) return null

        if (lines.length === 1) {
            return (
                <text
                    y={y}
                    fontSize={fontSize}
                    textAnchor="middle"
                    dominantBaseline="hanging"
                >
                    {lines[0]}
                </text>
            )
        }

        return (
            <>
                {lines.map((line, lineIndex) => (
                    <text
                        key={lineIndex}
                        y={y + (lineIndex * lineHeight)}
                        fontSize={fontSize}
                        textAnchor="middle"
                        dominantBaseline="hanging"
                    >
                        {line}
                    </text>
                ))}
            </>
        )
    }

    return (
        <g transform={`translate(0, ${height})`}>
            <line
                x1={0}
                y1={0}
                x2={labels.length ? scale(labels[labels.length - 1]) + scale.bandwidth() : 0}
                y2={0}
                stroke="currentColor"
            />

            {labels.map((label, index) => {
                const x = scale(label) + scale.bandwidth() / 2;
                const processed = processedLabels[index]

                if (!processed.text && overflowStrategy === 'hide') return null

                return (
                    <g key={label} transform={`translate(${x}, 0)`}>
                        <line y2={tickSize} stroke="currentColor" />
                        {renderLabel(processed.lines, 0, tickSize + 4)}
                    </g>
                )
            })}

        </g>
    )
}