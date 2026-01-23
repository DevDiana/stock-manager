# StockManager 📦

O **StockManager** é um MVP de controle de estoque desenvolvido em **Angular 21**, com foco em arquitetura frontend moderna, performance e boas práticas adotadas em produtos reais.

O projeto simula um sistema corporativo de gestão, cobrindo layout de dashboard, organização por features, qualidade de código e integração com serviços cloud. Ele foi criado como projeto demonstrativo para recrutadores e tech leads.

---

## 🚀 Tecnologias Utilizadas

### ✅ Já implementado

- **Angular 21** (Standalone Components)
- **TypeScript**
- **Angular Material** (Dashboard e componentes UI)
- **Docker** (Build Angular + Nginx)
- **ESLint** (Flat Config)
- **Prettier**
- **Husky + lint-staged**

### 🛠️ Em implementação

- Estrutura de telas e navegação
- Serviços de domínio (Produtos, Estoque)
- Organização do projeto por features

### 🔜 Planejado

- **Firebase Authentication**
- **Firestore (Banco de Dados)**
- **Angular Signals**
- **Guards de Rotas**
- **HTTP Interceptors**
- **Deploy em cloud (Firebase Hosting)**

---

## 🏗️ Arquitetura e Decisões Técnicas

- Uso de **Standalone Components**, eliminando `NgModules`.
- Estrutura baseada em **features**, facilitando manutenção e escalabilidade.
- Preparação para **Change Detection OnPush**, focando em performance.
- Projeto **dockerizado** para garantir consistência entre ambientes de desenvolvimento e produção.

---

## 🐳 Docker (Execução em Container)

O projeto está configurado para rodar em containers, garantindo o mesmo ambiente em qualquer máquina.

1.  **Construir a imagem:**
    ```bash
    docker build -t stock-manager .
    ```
2.  **Rodar o container:**
    `bash
docker run -p 8080:80 stock-manager
`
    O app ficará disponível em `http://localhost:8080`.

## 🔧 Como Desenvolver Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DevDiana/stock-manager.git](https://github.com/DevDiana/stock-manager.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Rode o projeto (Hot Reload):**
    ```bash
    npm start
    ```

---

## 🗺️ Roadmap do Projeto

### Fase 1 — Fundamentos (concluído)

- [x] Setup do Angular 21
- [x] Configuração de ESLint (Flat Config)
- [x] Configuração do Prettier
- [x] Configuração do Husky + lint-staged
- [x] Dockerização do projeto (Angular + Nginx)
- [x] Estrutura inicial do layout (Dashboard)

### Fase 2 — Estrutura Funcional

- [ ] Organização do projeto por features
- [ ] Implementação de navegação e rotas
- [ ] Tela de listagem de produtos
- [ ] Tela de cadastro de produtos
- [ ] Tela de edição de produtos
- [ ] Tela de controle de estoque

### Fase 3 — Regras de Negócio

- [ ] Serviço de produtos
- [ ] Serviço de estoque
- [ ] Validações de formulário
- [ ] Indicadores de estoque crítico
- [ ] Atualização de métricas no dashboard

### Fase 4 — Autenticação e Segurança

- [ ] Autenticação com Firebase Auth
- [ ] Guards de rotas
- [ ] Controle de permissões por perfil
- [ ] Proteção de rotas privadas

### Fase 5 — Qualidade e Performance

- [ ] Uso de Angular Signals
- [ ] Change Detection OnPush
- [ ] Tratamento global de erros (Interceptor)
- [ ] Loading states e feedbacks visuais

### Fase 6 — Deploy e Entrega

- [ ] Persistência de dados no Firestore
- [ ] Configuração de ambiente (dev/prod)
- [ ] Deploy em ambiente cloud
- [ ] Documentação final do projeto
