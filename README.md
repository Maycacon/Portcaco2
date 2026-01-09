# Portfólio Profissional

Site de portfólio profissional desenvolvido com React + TypeScript, Vite, Tailwind CSS e React Router DOM.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool rápida e otimizada
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento para React
- **Framer Motion** - Biblioteca de animações
- **React Helmet Async** - Gerenciamento de SEO e meta tags
- **Context API** - Gerenciamento de estado global
- **LocalStorage** - Persistência de dados (mock backend)

## 📋 Funcionalidades

### Páginas Públicas

1. **Home** - Apresentação inicial com nome, cargo e descrição
2. **Sobre** - Informações pessoais e lista de habilidades
3. **Projetos** - Grid de cards com todos os projetos
4. **Contato** - Informações de contato e links sociais

### Painel Admin

- **Login** - Autenticação simples com credenciais mockadas
- **CRUD de Projetos** - Criação, leitura, atualização e exclusão de projetos
- **Validação de Formulários** - Validação completa com mensagens de erro
- **Preview de Imagens** - Visualização de imagens antes de salvar
- **Persistência** - Dados salvos no LocalStorage

## 🎨 Design

- **Tema Dark** - Interface com tema escuro por padrão
- **Design Minimalista** - Layout limpo e moderno
- **Responsivo** - Adaptável para todos os dispositivos
- **Acessibilidade** - Código seguindo boas práticas de acessibilidade
- **Animações** - Transições suaves com Framer Motion

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Projeto
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📦 Build para Produção

Para gerar o build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

## 🚀 Deploy na Vercel

### Deploy Automático

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Selecione o repositório
5. Configure as opções:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em "Deploy"

### Deploy via CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel
```

Para produção:
```bash
vercel --prod
```

## 🔐 Credenciais do Admin

**Email:** `admin@portfolio.com`  
**Senha:** `admin123`

⚠️ **Importante:** Em produção, altere essas credenciais no arquivo `src/contexts/AuthContext.tsx`.

## 📁 Estrutura do Projeto

```
Projeto/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectForm.tsx
│   │   ├── ProjectList.tsx
│   │   └── LoadingSpinner.tsx
│   ├── contexts/         # Context API
│   │   └── AuthContext.tsx
│   ├── hooks/           # Hooks customizados
│   │   └── useProjects.ts
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── AdminLogin.tsx
│   │   └── AdminDashboard.tsx
│   ├── types/           # Tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🔧 Configurações

### Personalização

1. **Informações Pessoais**: Edite os arquivos em `src/pages/`
   - `Home.tsx` - Nome, cargo e descrição
   - `About.tsx` - Texto sobre e habilidades
   - `Contact.tsx` - Informações de contato

2. **Cores e Estilo**: Modifique `tailwind.config.js` para personalizar o tema

3. **Credenciais Admin**: Altere em `src/contexts/AuthContext.tsx`

### Variáveis de Ambiente (Opcional)

Crie um arquivo `.env` na raiz do projeto para configurações:

```env
VITE_APP_TITLE=Portfólio
VITE_APP_DESCRIPTION=Meu portfólio profissional
```

## 📝 Modelo de Dados

### Project Interface

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  figmaUrl?: string;  // opcional
  imageUrl: string;
  createdAt: Date;
}
```

## 🎯 Funcionalidades Futuras

- [ ] Integração com API real
- [ ] Upload de imagens
- [ ] Dark/Light mode toggle
- [ ] Busca e filtros de projetos
- [ ] Blog/Artigos
- [ ] Analytics
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando React + TypeScript

---

**Dúvidas?** Abra uma issue no repositório!
