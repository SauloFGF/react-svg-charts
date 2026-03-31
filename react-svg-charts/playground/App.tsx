import { BarChart } from '../src'

const data = [
    { label: 'B', value: 100, },
    { label: 'C', value: 23, },
    { label: 'A', value: 10, },
    { label: 'D', value: 45, },
]

export function App() {
    return (
        <div style={{ width: 600 }}>
            <h1>BarChart - Visual Test</h1>

            <BarChart data={data}
                width={600}
                height={600}
                colors={['#10b981',
                    '#e21313',
                    '#f59e0b',
                    '#8b5cf6']} />
        </div>
    )
}