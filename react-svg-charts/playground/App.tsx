import { BarChart } from '../src'

const data1 = [{
    label: "LIDIANEssssss",
    value: 52
},
{
    label: "LORENA",
    value: 2
},
{
    label: "MARCELA",
    value: 0
},
{
    label: "SIMONE",
    value: 0
},
{
    label: "ZELIA",
    value: 3
},
{
    label: "HELEN",
    value: 2
},
{
    label: "THAIS",
    value: 14
},
{
    label: "BRUNA",
    value: 8
},
{
    label: "ISABELA",
    value: 4
},
{
    label: "ELIENE",
    value: 1
},
{
    label: "LUCIANA",
    value: 6
},
{
    label: "DANRLLEY",
    value: 4
}]

export function App() {
    return (
        <>
            <div style={{ width: 800 }}>
                <h1>BarChart - Labels Customizadas</h1>

                <h2>Truncate (padrão)</h2>
                <BarChart
                    data={data1}
                    width={800}
                    height={400}
                    gap={20}
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    xAxisLabelConfig={{
                        overflowStrategy: 'truncate',
                        maxLines: 1
                    }}
                    colors={['#10b981', '#8b5cf6']}
                />

                <h2>Wrap - Quebra de linha</h2>
                <BarChart
                    data={data1}
                    width={800}
                    height={400}
                    gap={20}
                    margin={{ top: 20, right: 20, bottom: 80, left: 60 }}
                    xAxisLabelConfig={{
                        overflowStrategy: 'wrap',
                        maxLines: 2,
                        lineHeight: 12
                    }}
                    colors={['#10b981', '#8b5cf6']}
                />

                <h2>Ellipsis - Com reticências</h2>
                <BarChart
                    data={data1}
                    width={800}
                    height={400}
                    gap={20}
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    xAxisLabelConfig={{
                        overflowStrategy: 'ellipsis',
                        maxLines: 1
                    }}
                    colors={['#10b981', '#8b5cf6']}
                />

                <h2>Rotate - Rotacionado 45°</h2>
                <BarChart
                    data={data1}
                    width={800}
                    height={400}
                    gap={20}
                    margin={{ top: 20, right: 20, bottom: 80, left: 60 }}
                    xAxisRotate={-45}
                    xAxisLabelConfig={{
                        overflowStrategy: 'rotate',
                    }}
                    colors={['#10b981', '#8b5cf6']}
                />

                <h2>Formatter - Personalizado</h2>
                <BarChart
                    data={data1}
                    width={800}
                    height={400}
                    gap={20}
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    xAxisLabelConfig={{
                        formatter: (label) => label.toLowerCase(),
                        overflowStrategy: 'truncate'
                    }}
                    yAxisLabelConfig={{
                        formatter: (value) => `${value} un`
                    }}
                    colors={['#10b981', '#8b5cf6']}
                />
            </div>
        </>
    )
}