import type { AxisLabelConfig } from "./types"

export function truncateText(
    text: string,
    maxWidth: number,
    fontSize: number,
    strategy: 'truncate' | 'ellipsis' = 'truncate'
): string {
    // Estimatica aproximada: cada caracter ~= fontSize * 0.6 pixels
    const charWidth = fontSize * 0.6
    const maxChars = Math.floor(maxWidth / charWidth)

    if (text.length <= maxChars) return text

    const truncated = text.slice(0, Math.max(0, maxChars - 3))
    return strategy === 'ellipsis' ? truncated + '...' : truncated
}

export function wrapText(
    text: string,
    maxWidth: number,
    fontSize: number,
    maxLines: number = Infinity
): string[] {
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''

    const charWidth = fontSize * 0.6
    const maxChars = Math.floor(maxWidth / charWidth)

    for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word

        if (testLine.length <= maxChars) {
            currentLine = testLine
        } else {
            if (currentLine) {
                lines.push(currentLine)
                currentLine = word
            } else {
                // Palavra muito longa, força quebra
                lines.push(word.slice(0, maxChars))
                currentLine = word.slice(maxChars)
            }
        }

        if (lines.length >= maxLines) break
    }
    if (currentLine && lines.length < maxLines) {
        lines.push(currentLine)
    }

    return lines
}

export function formatLabel(
    label: string,
    index: number,
    config?: AxisLabelConfig
): string {
    if (!config?.formatter) return label
    return config.formatter(label, index)
}