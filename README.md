# ❣️👗 My Closet Angel – Sistema de Atendimento ao Cliente

Projeto desenvolvido como parte do portfólio da Mentoria de Testes de Software 2.0, integrando conceitos de **Omnichannel** e **Chatbot** em uma aplicação web para lojas de roupas femininas. O sistema permite atendimento ao cliente via WhatsApp, E-mail, Instagram e Telegram, com funcionalidades completas de filtragem, chat e automação de testes.

## 📝 Sobre o Projeto

A proposta é simular um ambiente real de atendimento omnichannel, onde clientes podem ser atendidos por múltiplos canais, com histórico, filtros e ações rápidas. O projeto foi planejado, especificado, implementado e testado seguindo boas práticas de engenharia de software e automação de testes.

### 🔗 [Wiki do Projeto](https://github.com/Angelkel/MyCloset_Angel/wiki)

## 📋 Fases do Projeto

- **Fase 01 – Planejamento:** Overview do projeto com mapas mentais e definição das atividades.
- **Fase 02 – Análise de Requisitos:** Levantamento de requisitos, critérios de aceite, DoR e DoD.
- **Fase 03 – Implementação:** Desenvolvimento da aplicação web com HTML, CSS e JavaScript, utilizando IA e ferramentas modernas.
- **Fase 04 – Planejamento de Testes:** Elaboração do plano de testes, casos de teste e critérios de aceitação.
- **Fase 05 – Execução de Testes:** Execução de testes funcionais, não funcionais e exploratórios.
- **Fase 06 – Automação de Testes:** Automação dos cenários de teste com Cypress.

## 💻 Funcionalidades Principais

- **Atendimento ao Cliente Omnichannel:** WhatsApp, E-mail, Instagram, Telegram
- **Chat Interativo:** Leitura e resposta de mensagens, histórico completo
- **Filtros Avançados:** Por canal, status e busca por texto
- **Ações Rápidas:** Concluir atendimento, marcar como em andamento
- **Notificações Visuais:** Feedback para todas as ações
- **Design Responsivo:** Interface adaptável para desktop, tablet e mobile
- **Dados Realistas:** 20 conversas de exemplo com múltiplos canais e status

## 🧪 Automação de Testes (Cypress)

- Testes automatizados cobrindo:
  - Filtros por canal (WhatsApp, E-mail, Instagram, Telegram)
  - Filtros por status (Concluída, Em Andamento)
  - Seleção de mensagem e exibição do chat
  - Limite do campo de resposta (255 caracteres)
  - Envio de mensagem e atualização do chat
- Estrutura de testes na pasta `cypress/e2e/`
- Execução dos testes:
  ```sh
  npx cypress open
  # ou
  npx cypress run
  ```

## 📊 Resultados dos Testes Automatizados (Cypress + Mochawesome)

- **Total de testes:** 9
- **Passaram:** 9
- **Falharam:** 0
- **Pendentes/Skip:** 0
- **Duração total:** ~9 segundos
- **Última execução:** 20/08/2025

### Como visualizar o relatório HTML

Após rodar os testes com:
```sh
npx cypress run
```
O relatório será gerado em:
```
cypress/reports/html/index.html
```
Abra esse arquivo no navegador para ver detalhes dos cenários, passos e evidências.

#### Exemplos de cenários cobertos:
- Filtro por canal: WhatsApp, E-mail, Instagram, Telegram
- Filtro por status: Concluída, Em Andamento
- Seleção de mensagem exibe chat
- Campo de resposta respeita limite de 255 caracteres
- Envio de mensagem aparece no chat

## 🚀 Como Executar

1. **Clone ou baixe os arquivos** para sua máquina local
2. **Abra o arquivo `index.html`** em qualquer navegador moderno
3. **A aplicação funcionará imediatamente** sem necessidade de servidor ou banco de dados

## 📁 Estrutura de Arquivos

```
Portfolio_MyCloset/
├── index.html         # Arquivo principal HTML
├── styles.css         # Estilos CSS
├── script.js          # Funcionalidades JavaScript
├── cypress/           # Testes automatizados
│   └── e2e/
│       └── atendimento.cy.js
└── README.md          # Documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Flexbox, Grid, animações)
- **JavaScript ES6+**
- **Font Awesome** (ícones)
- **Cypress** (automação de testes)

## 🎨 Design e Experiência

- Layout feminino, elegante e responsivo
- Gradientes, bordas arredondadas, animações e ícones coloridos
- Interface inspirada em plataformas modernas de atendimento

## 📑 Documentação Complementar

Consulte a [Wiki do Projeto](https://github.com/Angelkel/MyCloset_Angel/wiki) para:
- Requisitos funcionais e não funcionais
- Épicos, user stories e critérios de aceite
- Plano de testes e casos de teste
- Registro de incidentes

## 📄 Licença

Este projeto foi desenvolvido como demonstração técnica e pode ser usado livremente para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ para My Closet Angel** 