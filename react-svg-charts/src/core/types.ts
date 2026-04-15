export type BarDatum = {
    label: string
    value: number
}

export type BarLayout = {
    value: number
    x: number
    y: number
    width: number
    height: number
    index: number
    label: string // Adicionar label ao BarLayout
}

export type LabelOverflowStrategy =
    | 'truncate'
    | 'wrap'
    | 'rotate'
    | 'hide'
    | 'ellipsis'

export type LabelFormatter = (label: string, index: number) => string

export type AxisLabelConfig = {
    maxWidth?: number
    maxLines?: number
    overflowStrategy?: LabelOverflowStrategy
    formatter?: LabelFormatter
    lineHeight?: number
}
