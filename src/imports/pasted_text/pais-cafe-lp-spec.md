# Landing Page — Dia dos Pais | Café 283
**Spec de construção para Figma Make** · Cavalli Growth
Data do evento: **Domingo, 09/08/2026** · Local: João Pessoa/PB

---

## 0. O trabalho da página (leia antes de tudo)

Esta LP tem **um** trabalho: **capturar o lead antes de vender.**

Ela não é uma página de venda de cardápio. É uma página de **reserva e pré-venda de uma data com capacidade limitada**. Toda decisão de layout, copy e hierarquia serve a isso.

**Ordem de prioridade dos CTAs:**
1. **Reservar mesa** (salão — o produto principal, capacidade limitada, é o que gera escassez real)
2. **Garantir o Kit do Pai** (pré-venda com pagamento — compromisso financeiro)
3. **Entrar no Grupo VIP** (para quem não decide agora — o "não perca o lead")

**Regra de ouro:** ninguém sai da página sem deixar WhatsApp. Se não reservou, entra na lista. Se não entrou na lista, o remarketing pega.

**Restrição real:** ainda **não existem fotos profissionais**. A LP precisa funcionar bem com poucas imagens e carregar o peso na tipografia, na estrutura e no elemento-assinatura. Prever placeholders e um plano de substituição.

---

## 1. Tokens de design

### Cor
| Token | Hex | Uso |
|---|---|---|
| `espresso` | `#1C1614` | Fundo das seções âncora, texto principal sobre claro |
| `papel` | `#F3ECE1` | Fundo padrão da página (branco quente, textura de papel de comanda) |
| `petroleo` | `#123C46` | Cor de marca da campanha; blocos de destaque, headers de seção |
| `ambar` | `#E3A02C` | **Somente CTAs e escassez.** Nada mais. |
| `oliva` | `#6B7150` | Detalhes, ícones, divisores, estados secundários |
| `alerta` | `#C2452D` | Contador e "últimas vagas" — usar com moderação extrema |

> **Disciplina de cor:** o âmbar só aparece em botão e em contador. Se ele estiver em mais de 3 lugares na tela, algo está errado.

### Tipografia
| Papel | Fonte | Uso |
|---|---|---|
| **Display** | `Bricolage Grotesque` (peso 700–800, largura condensada) | Headline do hero e títulos de seção. Usar com **restrição** — no máx. 4 ocorrências. |
| **Corpo** | `Inter Tight` (400 / 500) | Parágrafos, descrições, labels |
| **Utilitária / dados** | `JetBrains Mono` (400) | Horários, preços, contador, e **toda a comanda**. É o que dá o clima de cafeteria. |

**Escala (mobile → desktop):**
- H1: 40px → 72px, line-height 0.95, tracking -2%
- H2: 28px → 44px
- Corpo: 16px → 18px, line-height 1.6
- Mono/label: 13px → 14px, tracking +6%, uppercase

### Layout
- **Mobile-first.** Ponto de partida: 390px. Breakpoints: 390 / 768 / 1280.
- Container: máx. 1120px, padding lateral 20px (mobile) / 48px (desktop).
- Grade de 12 colunas no desktop; coluna única no mobile.
- **Border-radius: 4px.** Cantos quase retos — a página deve parecer impressa, não SaaS.
- Ritmo vertical: 64px (mobile) / 112px (desktop) entre seções.

### Elemento-assinatura: **a comanda**
Um card fixo (sticky no desktop, bottom-sheet no mobile) estilizado como **recibo de cafeteria**: fundo `papel`, borda serrilhada no topo e na base, tudo em `JetBrains Mono`, linhas pontilhadas separando os itens. Conforme a pessoa escolhe **horário** e **nº de pessoas**, a comanda se preenche em tempo real:

```
┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐
   CAFÉ 283 · JOÃO PESSOA
   DIA DOS PAIS
   DOM 09.08.2026
- - - - - - - - - - - - - - -
   HORÁRIO ......... 12:30
   PESSOAS ............. 4
   MESA ......... A CONFIRMAR
- - - - - - - - - - - - - - -
   [ CONFIRMAR RESERVA ]
   Restam 6 mesas neste horário
└─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
```

É esse objeto que a pessoa vai lembrar. Todo o resto da página é **quieto** em volta dele.

---

## 2. Wireframe

```
MOBILE (390px)                      DESKTOP (1280px)
┌──────────────────────┐            ┌──────────────────────────────────────┐
│ [logo]     [WhatsApp]│            │ [logo]              [Reservar mesa]  │
├──────────────────────┤            ├──────────────────────────────────────┤
│ DOM · 09.08.2026     │            │ DOM · 09.08.2026    │                │
│                      │            │                     │   ┌──────────┐ │
│ NO DIA DOS PAIS,     │            │ NO DIA DOS PAIS,    │   │ COMANDA  │ │
│ SENTE O PAI          │            │ SENTE O PAI NA      │   │ (sticky) │ │
│ NA MELHOR MESA       │            │ MELHOR MESA         │   │          │ │
│ DA CIDADE.           │            │ DA CIDADE.          │   │ horário  │ │
│                      │            │                     │   │ pessoas  │ │
│ [ Reservar mesa ]    │            │ [Reservar] [Kit]    │   │ [CTA]    │ │
│ [ Garantir o Kit ]   │            │                     │   └──────────┘ │
│                      │            │ ⏱ faltam 26 dias    │                │
│ ⏱ faltam 26 dias     │            │                     │                │
├──────────────────────┤            ├──────────────────────────────────────┤
│ [imagem ambiente]    │            │ [imagem ambiente — full bleed]       │
├──────────────────────┤            ├──────────────────────────────────────┤
│ O QUE TEM NO DIA     │            │ O QUE TEM NO DIA (3 col)             │
│ · menu especial      │            │ · menu · brinde · ambiente           │
│ · brinde pro pai     │            │                                      │
│ · ambiente           │            │                                      │
├──────────────────────┤            ├──────────────────────────────────────┤
│ ESCOLHA O HORÁRIO    │            │ ESCOLHA O HORÁRIO (pills)            │
│ [09:00][11:00][12:30]│            │ [09:00][11:00][12:30][14:00][15:00]  │
│ [14:00][15:00]       │            │ ← alimenta a comanda                 │
├──────────────────────┤            ├──────────────────────────────────────┤
│ KIT DO PAI (pré-venda)            │ KIT DO PAI — card + checkout         │
│ R$ XX,XX · retirada  │            │                                      │
│ [ Comprar agora ]    │            │                                      │
├──────────────────────┤            ├──────────────────────────────────────┤
│ QUEM JÁ SENTOU AQUI  │            │ REVIEWS (3 col) ⭐⭐⭐⭐⭐              │
│ ⭐⭐⭐⭐⭐ reviews      │            │                                      │
├──────────────────────┤            ├──────────────────────────────────────┤
│ NÃO VAI DAR AGORA?   │            │ GRUPO VIP — captura final            │
│ [ Entrar no VIP ]    │            │                                      │
├──────────────────────┤            ├──────────────────────────────────────┤
│ endereço · horário   │            │ footer                               │
└──────────────────────┘            └──────────────────────────────────────┘
        ↑
  Bottom-sheet da comanda
  aparece ao escolher horário
```

---

## 3. Seções, copy e comportamento

### 3.1 Header
- Logo do 283 à esquerda. Botão **"Reservar mesa"** (âmbar) à direita no desktop; no mobile só ícone de WhatsApp.
- Fica **sticky** com fundo `espresso` após 200px de scroll.

---

### 3.2 Hero — *headline de escassez com data específica*
- **Eyebrow** (mono, uppercase, `oliva`): `DOMINGO · 09.08.2026 · JOÃO PESSOA`
- **H1** (Bricolage, `espresso`, sobre `papel`):
  > **No Dia dos Pais, sente o pai na melhor mesa da cidade.**
- **Sub** (Inter Tight):
  > Menu especial, café de verdade e mesas contadas. O 283 abre das 9h às 15h no domingo do Dia dos Pais — e a reserva vai por ordem de chegada.
- **CTAs (dois, lado a lado no desktop / empilhados no mobile):**
  - Primário (âmbar, preenchido): **Reservar mesa**
  - Secundário (contorno `petroleo`): **Garantir o Kit do Pai**
- **Contador** (mono, `alerta`): `FALTAM 26 DIAS · 09.08.2026` — countdown ao vivo até a data.
- **Imagem:** ambiente da cafeteria (placeholder até as fotos novas). Tratamento: duotone `espresso` + `papel` para disfarçar imagem de baixa qualidade e unificar o visual **enquanto as fotos boas não chegam**.

> **Nota de copy:** nada de "celebre com quem você ama". Fale do que ele controla: a mesa, o horário, o menu.

---

### 3.3 O que tem no dia (Diferenciais)
Três blocos, sem numeração (não é sequência — é lista). Ícones em linha fina, `oliva`.

| Bloco | Título | Texto |
|---|---|---|
| 1 | **Menu especial do dia** | Um menu montado só para o domingo 09/08 — servido das 9h às 15h. |
| 2 | **Brinde para o pai** | Todo pai na mesa leva um brinde do 283. *(definir com o cliente)* |
| 3 | **A casa toda dele** | Café coado na hora, ambiente aberto e mesa reservada no seu nome. |

**Galeria:** 3 a 6 fotos (grid 3 col no desktop, carrossel no mobile). **Substituir os placeholders assim que a sessão de fotos sair.**

---

### 3.4 Escolha o horário → alimenta a comanda ⭐ *core da página*
- Título: **Escolha o horário**
- **Pills de horário** (mono): `09:00` `11:00` `12:30` `14:00` `15:00`
  - Estado disponível: contorno `petroleo`
  - Estado selecionado: preenchido `petroleo`, texto `papel`
  - Estado esgotado: riscado, opacidade 40%, não clicável, label `ESGOTADO`
- **Seletor de pessoas:** stepper `− 4 +`
- Ao selecionar, a **comanda** se preenche (desktop: sticky à direita; mobile: bottom-sheet sobe).
- CTA da comanda: **Confirmar reserva** → abre o formulário.

**Escassez real, não inventada:** abaixo de cada horário, `Restam N mesas`. Se o cliente não tiver esse dado, começar com 2 horários já marcados como ESGOTADO — mas **só se for verdade**. Escassez falsa em cafeteria de bairro queima reputação.

---

### 3.5 Formulário de reserva (modal)
Campos, nesta ordem: **Nome** · **WhatsApp** · **Nº de pessoas** · **Horário** (pré-preenchido) · checkbox `Quero receber as novidades do 283 no WhatsApp` (marcado por padrão).

- Botão: **Confirmar reserva** (nunca "Enviar").
- Sucesso: `Reserva confirmada.` + resumo em formato de comanda + botão **Abrir no WhatsApp**.
- Erro: dizer o que aconteceu e como resolver. Sem pedir desculpa, sem vaguidão.

> **Integração:** o WhatsApp precisa cair direto no CRM (Repediu/Falaê). Essa é a razão de a página existir.

---

### 3.6 Kit do Pai — pré-venda com checkout
- Card destacado, fundo `petroleo`, texto `papel`.
- Título: **O Kit do Pai**
- Texto: `Para quem não vai sair de casa: café, doce e o que o 283 faz de melhor, em uma caixa. Retirada no dia 09/08 ou entrega em João Pessoa.`
- Preço em mono, grande.
- CTA: **Comprar agora** → checkout (Pix / cartão).
- Label de escassez: `Produção limitada · pedidos até 07/08`

> É aqui que mora o **comprometimento financeiro** do modelo. Quem paga antes, aparece.

---

### 3.7 Prova social + horários
- 3 reviews reais (⭐⭐⭐⭐⭐) — nome, texto curto, sem foto de stock.
- Ao lado, bloco em mono com o **funcionamento do dia**:
  ```
  DOMINGO 09.08.2026
  ABERTO ........ 09:00 – 15:00
  RESERVA ....... ATÉ 08.08
  KIT ........... PEDIDOS ATÉ 07.08
  ```

---

### 3.8 Grupo VIP — a rede de segurança
Fundo `espresso`. Última chance de capturar quem não converteu.

- Título: **Ainda decidindo?**
- Texto: `Entre no grupo e a gente te avisa quando abrir horário novo — e quando esgotar.`
- CTA: **Entrar no grupo VIP** → WhatsApp.

---

### 3.9 Footer
Endereço, mapa, telefone, Instagram, horário de funcionamento normal. Discreto.

---

## 4. Comportamento e qualidade

- **Mobile-first, obrigatório.** Mais de 80% do tráfego virá de Meta Ads no celular.
- **Peso:** meta abaixo de 1,5MB. Imagens em WebP, lazy-load.
- **Motion:** um único momento orquestrado — a comanda **subindo** ao escolher o horário. Nada mais anima. Respeitar `prefers-reduced-motion`.
- **Acessibilidade:** foco de teclado visível, contraste AA, labels em todos os campos.
- **Tracking:** Meta Pixel + eventos `Lead` (reserva e VIP) e `Purchase` (Kit). Sem isso o remarketing de D-2 não existe.

---

## 5. Prompt pronto para colar no Figma Make

> Copie o bloco abaixo inteiro.

```
Crie uma landing page mobile-first de reserva e pré-venda para o Dia dos Pais de uma
cafeteria chamada Café 283, em João Pessoa/PB. O evento é no domingo, 09/08/2026,
das 9h às 15h. A página tem UM objetivo: capturar o contato de WhatsApp da pessoa
antes de vender — via reserva de mesa (principal), compra antecipada de um kit
(secundário) ou entrada em um grupo VIP (rede de segurança).

DIREÇÃO VISUAL — siga exatamente, não use o visual creme + serifa + terracota:
- Paleta: espresso #1C1614, papel #F3ECE1 (fundo padrão), petróleo #123C46 (cor de
  marca), âmbar #E3A02C (SOMENTE botões e escassez), oliva #6B7150 (detalhes),
  alerta #C2452D (contador).
- Tipografia: display "Bricolage Grotesque" 700-800 condensada (só headline e títulos
  de seção, uso restrito); corpo "Inter Tight" 400/500; utilitária "JetBrains Mono"
  para horários, preços, contador e comanda.
- Border-radius de 4px em tudo. A página deve parecer impressa, não parecer SaaS.
- Container máx. 1120px. Breakpoints 390 / 768 / 1280.

ELEMENTO-ASSINATURA — este é o coração da página:
Um card estilizado como RECIBO/COMANDA DE CAFETERIA: fundo papel, bordas serrilhadas
no topo e na base, todo o texto em JetBrains Mono, linhas pontilhadas separando os
campos. Ele é sticky à direita no desktop e sobe como bottom-sheet no mobile. Conforme
o usuário escolhe horário e número de pessoas, a comanda se preenche em tempo real
mostrando: CAFÉ 283 · DIA DOS PAIS · DOM 09.08.2026 / HORÁRIO / PESSOAS / MESA A
CONFIRMAR, e o botão CONFIRMAR RESERVA. Todo o resto da página deve ser visualmente
quieto para essa comanda ser a única coisa memorável.

SEÇÕES, NESTA ORDEM:
1. Header sticky: logo à esquerda, botão âmbar "Reservar mesa" à direita.
2. Hero: eyebrow em mono "DOMINGO · 09.08.2026 · JOÃO PESSOA"; H1 "No Dia dos Pais,
   sente o pai na melhor mesa da cidade."; subtítulo "Menu especial, café de verdade e
   mesas contadas. O 283 abre das 9h às 15h no domingo do Dia dos Pais — e a reserva
   vai por ordem de chegada."; dois botões: "Reservar mesa" (âmbar, preenchido) e
   "Garantir o Kit do Pai" (contorno petróleo); countdown ao vivo em mono na cor
   alerta. Imagem de ambiente em tratamento duotone espresso/papel.
3. "O que tem no dia": 3 blocos sem numeração — Menu especial do dia / Brinde para o
   pai / A casa toda dele. Abaixo, galeria de 6 fotos (grid no desktop, carrossel no
   mobile) — use placeholders.
4. "Escolha o horário": pills em mono (09:00, 11:00, 12:30, 14:00, 15:00) com três
   estados — disponível (contorno petróleo), selecionado (preenchido petróleo),
   esgotado (riscado, 40% de opacidade, label ESGOTADO). Stepper de número de pessoas.
   Ao selecionar, a comanda se preenche. Abaixo de cada horário, "Restam N mesas".
5. Modal de reserva: Nome, WhatsApp, Nº de pessoas, Horário (pré-preenchido), checkbox
   "Quero receber as novidades do 283 no WhatsApp" (marcado). Botão "Confirmar reserva".
   Tela de sucesso mostra o resumo em formato de comanda + botão "Abrir no WhatsApp".
6. "O Kit do Pai": card fundo petróleo, texto papel, preço grande em mono, botão
   "Comprar agora", label "Produção limitada · pedidos até 07/08".
7. Prova social: 3 reviews 5 estrelas + bloco em mono com o funcionamento do dia
   (ABERTO 09:00–15:00 / RESERVA ATÉ 08.08 / KIT PEDIDOS ATÉ 07.08).
8. "Ainda decidindo?": seção fundo espresso, botão "Entrar no grupo VIP".
9. Footer: endereço, mapa, Instagram, horário normal.

MOVIMENTO: apenas UM momento animado — a comanda subindo quando o horário é escolhido.
Nada mais anima. Respeitar prefers-reduced-motion.

COPY: português do Brasil, voz ativa, frases curtas, sem clichê de "celebre com quem
você ama". Botões dizem exatamente o que acontece ("Confirmar reserva", nunca "Enviar").
```

---

## 6. Checklist antes de subir tráfego

- [ ] Fotos profissionais substituíram todos os placeholders
- [ ] Horários e capacidade real do salão confirmados com o cliente
- [ ] Sistema de reserva funcionando (a LP promete mesa — precisa entregar)
- [ ] Checkout do Kit ativo (Pix + cartão) e preço definido
- [ ] WhatsApp caindo no CRM (Repediu/Falaê)
- [ ] Meta Pixel instalado + eventos `Lead` e `Purchase` disparando
- [ ] Teste em 390px de largura, em 4G
- [ ] Página no ar até **01/08** — o teaser de vídeo entra em 02/08