# SVG Bar Charts# SVG Bar Charts de gráficos de barras construída em **React + SVG**, focada em:
- **clareza visual**
- **princípios corretos de visualização de dados**
- **baixo nível de abstração**

## O que é um gráfico de barras?

Um gráfico de barras serve para:
- Comparar valores discretos
- Mostrar diferença de magnitude
- Facilitar comparações rápidas

### Regras fundamentais

- Cada barra representa uma categoria
- O comprimento da barra codifica o valor
- O eixo principal representa quantidade, não categoria
- A escala padrão sempre começa em zero

Essas regras **não são opcionais** e são garantidas pela biblioteca.

---

## Modelo mental da biblioteca

``

No SVG, tudo se resume a:
- `x`
- `y`
- `width`
- `height`

---

## O que a biblioteca garante

✅ Escalas coerentes  
✅ Layout consistente  
✅ Base em zero por padrão  
✅ Cálculo correto de proporção  
✅ SVG puro, sem canvas  

---

## O que a biblioteca permite

- Mudança de orientação (vertical / horizontal)
- Ordenação automática:
  - Alfabética
  - Temporal
  - Crescente / decrescente
- Agrupamento de barras
- Empilhamento
- Customização visual (cores, espaçamento)

---

## O que esta biblioteca NÃO é

❌ Não é um dashboard pronto  
❌ Não esconde SVG  
❌ Não força temas ou estilos  
❌ Não anima sem intenção  

---

## Status do projeto

🚧 Em desenvolvimento  
Este projeto começou como estudo e evoluiu para uma biblioteca educacional e experimental.

---

## Filosofia

> Uma biblioteca de visualização deve proteger o usuário
> de representações erradas de dados,
> mesmo quando permite flexibilidade visual.
