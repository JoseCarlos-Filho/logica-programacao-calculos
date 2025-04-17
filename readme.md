# Multi-Calculadora Web - Lógica JS Desafio 3

[Imagem do Site](./assets/programacao.png)

## Descrição

Esta é uma aplicação web que reúne diversas calculadoras úteis para o dia a dia, desenvolvida como parte de um desafio de lógica de programação com JavaScript. A interface permite ao usuário selecionar qual calculadora deseja usar e, em seguida, inserir os dados necessários para obter o resultado.

## Sumário

- [Multi-Calculadora Web - Lógica JS Desafio 3](#multi-calculadora-web---lógica-js-desafio-3)
  - [Descrição](#descrição)
  - [Sumário](#sumário)
  - [Funcionalidades (Calculadoras Disponíveis)](#funcionalidades-calculadoras-disponíveis)
    - [1. Calculadora de Custo de Viagem:](#1-calculadora-de-custo-de-viagem)
    - [2. Verificador de Palíndromo:](#2-verificador-de-palíndromo)
    - [3. Calculadora de Consumo de Energia:](#3-calculadora-de-consumo-de-energia)
    - [4. Calculadora de Consumo de Água:](#4-calculadora-de-consumo-de-água)
    - [5. Calculadora Financeira Pessoal (Regra 50/30/20):](#5-calculadora-financeira-pessoal-regra-503020)
  - [Funcionalidades Gerais](#funcionalidades-gerais)
  - [Como Usar](#como-usar)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Funcionalidades (Calculadoras Disponíveis)

O projeto inclui as seguintes calculadoras:

### 1. Calculadora de Custo de Viagem:
*   Calcula o consumo médio de combustível (km/l).
*   Calcula o custo por quilômetro rodado (R$/km).
*   Calcula o custo total de combustível para a viagem.
*   **Entradas:** Distância percorrida (km), Quantidade abastecida (litros), Preço por litro (R$).

### 2. Verificador de Palíndromo:
*   Verifica se uma palavra ou frase inserida é um palíndromo (lê-se da mesma forma de trás para frente).
*   **Entrada:** Uma palavra ou frase.

### 3. Calculadora de Consumo de Energia:
*   Calcula o consumo mensal de energia elétrica de um aparelho em kilowatt-hora (kWh).
*   Valida os limites de potência (máx 6500W), horas de uso (máx 24h) e dias de uso (máx 30 dias).
*   **Entradas:** Potência do aparelho (W), Horas de uso por dia, Dias de uso no mês.

### 4. Calculadora de Consumo de Água:
*   Calcula o consumo de água entre duas leituras de hidrômetro em metros cúbicos (m³) e em litros (L).
*   Valida se a leitura atual é maior que a anterior.
*   **Entradas:** Leitura anterior do hidrômetro (m³), Leitura atual do hidrômetro (m³).

### 5. Calculadora Financeira Pessoal (Regra 50/30/20):
*   Distribui a renda líquida mensal de acordo com a regra 50/30/20:
    *   50% para Custos Essenciais.
    *   30% para Custos Pessoais.
    *   20% para Reserva Financeira/Investimentos.
*   Valida se a renda inserida é um número válido e maior ou igual a um valor mínimo (atualmente R$ 1518,00).
*   **Entrada:** Renda líquida mensal (R$).

## Funcionalidades Gerais

*   **Seleção de Calculadora:** O usuário escolhe qual calculadora usar através de botões de rádio.
*   **Exibição Dinâmica:** Apenas a calculadora selecionada é exibida na tela.
*   **Validação de Entrada:** A maioria das calculadoras possui validações para garantir que os campos sejam preenchidos corretamente (não vazios, valores numéricos, dentro dos limites esperados). Mensagens de alerta são exibidas em caso de erro.
*   **Limpeza de Campos:** Após cada cálculo bem-sucedido ou erro que exija correção, os campos de entrada são limpos automaticamente.
*   **Botão Início:** Um botão para recarregar a página e retornar ao estado inicial.

## Como Usar

1.  Abra o arquivo `index.html` (ou o arquivo HTML principal) em seu navegador.
2.  Selecione a calculadora desejada clicando na opção correspondente (botão de rádio).
3.  A seção da calculadora escolhida será exibida.
4.  Preencha os campos de entrada com os dados solicitados.
5.  Clique no botão "Calcular" (ou o botão específico da calculadora).
6.  O resultado será exibido na área designada.
7.  Em caso de erro na entrada, uma mensagem de alerta aparecerá. Corrija os dados e tente novamente.
8.  Para começar um novo cálculo ou usar outra calculadora, os campos geralmente são limpos automaticamente, ou você pode usar o botão "Início" para recarregar a página.

## Tecnologias Utilizadas

*   HTML
*   CSS
*   JavaScript (Vanilla JS)

---
