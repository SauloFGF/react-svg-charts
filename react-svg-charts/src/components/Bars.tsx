import type { BarLayout } from '../core/types'

export type BarsProps = {
    bars: BarLayout[]
    fill?: string | ((bar: BarLayout) => string)
    opacity?: number | ((bar: BarLayout) => number)
    onBarEnter?: (bar: BarLayout) => void
    onBarLeave?: (bar: BarLayout) => void
}

export function Bars({
    bars,
    fill = '#4682B4',
    opacity = 1,
    onBarEnter,
    onBarLeave,
}: BarsProps) {
    return (
        <>
            {bars.map(bar => (
                <rect
                    key={bar.index}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={typeof fill === 'function' ? fill(bar) : fill}
                    fillOpacity={
                        typeof opacity === 'function' ? opacity(bar) : opacity
                    }
                    onMouseEnter={
                        onBarEnter ? () => onBarEnter(bar) : undefined
                    }
                    onMouseLeave={
                        onBarLeave ? () => onBarLeave(bar) : undefined
                    }
                />
            ))}
        </>
    )
}
