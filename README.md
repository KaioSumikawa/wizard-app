# WizardApp — Catálogo Mágico de Filmes

> **Disciplina:** Programação para Dispositivos Móveis I  
> **Desenvolvedor:** Kaio Toshiyuki Pereira Sumikawa  
> **RA:** 2991392513012  

---

## Sobre o Projeto

O **WizardApp** é um aplicativo mobile desenvolvido em **React Native** com **Expo Router**, focado em apresentar o catálogo completo da saga cinematográfica de *Harry Potter*. 

O aplicativo foi projetado com uma interface imersiva inspirada na estética mística e nas cores de Hogwarts (tons escuro-místicos `#16161D`, detalhes em dourado `#D4AF37` e acentos em vermelho carmesim `#740001`).

---

## Funcionalidades

- **Tela Inicial (Splash / Welcome):** Apresentação com imagem de fundo completa e navegação direta para as seções.
- **Catálogo Mágico:** Listagem de filmes com cards personalizados, imagens locais, títulos e informações de lançamento.
- **Interatividade (Favoritos):** Funcionalidade de favoritar filmes com feedback visual em tempo real utilizando estado local (`useState`).
- **Tela de Detalhes:** Exibição completa das descrições e dados técnicos do filme selecionado via parâmetros de rota.
- **Tela Sobre:** Informações acadêmicas e institucionais do projeto.
- **Navegação Centralizada:** Layout global gerenciado via `_layout.tsx` com Expo Router, garantindo consistência visual nos cabeçalhos.

---

## Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** — Framework para desenvolvimento mobile multiplataforma.
- **[Expo](https://expo.dev/)** — Ecossistema e ferramentas para desenvolvimento React Native.
- **[Expo Router](https://docs.expo.dev/router/introduction/)** — Navegação baseada em arquivos de código limpo.
- **TypeScript** — Tipagem estática para maior segurança e qualidade de código.
- **StyleSheet (Style API)** — Estilização nativa modularizada e performática.

---

## Estrutura do Projeto

```text
WizardApp/
├── app/
│   ├── _layout.tsx      # Configuração global de rotas e cabeçalhos
│   ├── index.tsx        # Tela Inicial / Welcome
│   ├── catalogo.tsx     # Tela do Catálogo de Filmes
│   ├── detalhes.tsx     # Tela de Detalhes do Filme
│   └── sobre.tsx        # Tela de Informações sobre o App
├── assets/
│   └── images/          # Imagens da capa e cartazes dos filmes (.jpeg)
├── components/
│   ├── Botao.tsx        # Componente reutilizável de botão estilizado
│   └── FilmeCard.tsx    # Card do filme com sistema de favoritos
├── package.json
└── README.md
```

---

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado na máquina.
- Aplicativo **Expo Go** instalado no celular (Android/iOS) ou um emulador configurado.

### Passo a Passo

# 1. Clonar o repositório:
```bash
git clone https://github.com/seu-usuario/wizard-app.git
```

# 2. Acessar a pasta do projeto:
```bash
cd wizard-app
```

# 3. Instalar as dependências:
```bash
npm install
```

# 4. Iniciar o servidor do Expo:
```bash
npx expo start
```

# 5. Executar no dispositivo:
- Abra o app **Expo Go** no seu celular e escaneie o código QR exibido no terminal.

---

## Autor

# Nome: Kaio Toshiyuki Pereira Sumikawa  
# RA: 2991392513012