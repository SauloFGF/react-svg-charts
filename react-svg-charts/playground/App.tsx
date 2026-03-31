import { BarChart } from '../src'

const data1 = [{
    label: "LIDIANE",
    value: 5
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

const data2 = [{
    label: "LIDIANE",
    value: 17
},
{
    label: "LORENA",
    value: 8
},
{
    label: "MARCELA",
    value: 8
},
{
    label: "SIMONE",
    value: 108
},
{
    label: "ZELIA",
    value: 21
},
{
    label: "HELEN",
    value: 16
},
{
    label: "THAIS",
    value: 39
},
{
    label: "BRUNA",
    value: 21
},
{
    label: "ISABELA",
    value: 24
},
{
    label: "ELIENE",
    value: 22
},
{
    label: "LUCIANA",
    value: 43
},
{
    label: "DANRLLEY",
    value: 14
}]

export function App() {
    return (
        <>
            <div style={{ width: 600 }}>
                <h1>BarChart - CandidatoEntrevistados</h1>

                <BarChart data={data1}
                    width={600}
                    height={600}
                    gap={20}
                    colors={['#10b981',
                        // '#e21313',
                        // '#f59e0b',
                        '#8b5cf6']}
                />
            </div>
            <div style={{ width: 600 }}>
                <h1>BarChart - CandidatoAgendados</h1>

                <BarChart data={data2}
                    width={600}
                    height={600}

                // colors={['#10b981',
                //     '#e21313',
                //     '#f59e0b',
                //     '#8b5cf6']}
                />
            </div>
        </>

    )
}