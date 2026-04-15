# 📊 SVG Bar Charts

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Bundle Size](https://img.shields.io/badge/dynamic/json?label=minzipped&query=$..size&url=https://deno.bundlejs.com/?q=svg-bar-charts)](https://bundlejs.com/?q=svg-bar-charts)

Uma biblioteca de gráficos de barras em **React + SVG** focada em **clareza visual**, **princípios corretos de visualização de dados** e **baixo nível de abstração**.

## 🎯 Por que esta biblioteca?

Diferente de soluções completas como Recharts ou Victory, esta biblioteca:

- **Não esconde o SVG** - Você tem controle total sobre o markup
- **Garante boas práticas** - Escalas sempre começam do zero, proporções corretas
- **É mínima e tree-shakeable** - Carregue apenas o que usar
- **Prioriza acessibilidade** - Semântica SVG correta e roles ARIA
- **É uma base sólida** - Construa suas próprias abstrações por cima

## 📖 Princípios de Visualização

### O que é um gráfico de barras?

Um gráfico de barras é a ferramenta visual mais eficaz para:
- ✅ Comparar valores entre categorias discretas
- ✅ Mostrar diferenças de magnitude
- ✅ Facilitar comparações rápidas e precisas

### Regras fundamentais (garantidas pela lib)

| Regra | Implementação |
|-------|---------------|
| Cada barra representa uma categoria | Mapeamento 1:1 com `BarDatum.label` |
| Comprimento da barra codifica o valor | Escala linear proporcional |
| Eixo principal representa quantidade | Eixo Y sempre quantitativo |
| Escala sempre começa em zero | `createLinearScaleWithZeroBase` |

> **Importante**: Estas regras não são opcionais. São garantias matemáticas que protegem contra representações enganosas de dados.
