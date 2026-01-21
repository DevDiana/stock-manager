# StockManager 📦

O **StockManager** é um MVP de controle de estoque de alta performance, desenvolvido com **Angular 21**. O projeto foca em arquitetura frontend moderna, utilizando funcionalidades nativas do framework para garantir reatividade e escalabilidade.

## 🚀 Tecnologias Principais

- **Framework:** Angular 21 (v21.0.0) com Standalone Components.
- **Linguagem:** TypeScript.
- **Estado e Reatividade:** Angular Signals e RxJS (map, filter, switchMap).
- **UI/Design:** Angular Material com Layout Dashboard (Flexbox/Grid).
- **Backend & Auth:** Firebase (Authentication + Firestore).
- **Container:** Docker (Nginx + Angular Build).

## 🛠️ Qualidade de Código e Padronização

Para garantir um desenvolvimento organizado e livre de erros comuns, o projeto utiliza:

- **ESLint:** Configuração moderna (Flat Config) integrada ao Angular.
- **Prettier:** Padronização de formatação de código.
- **Husky & lint-staged:** Hooks de pré-commit que validam o Lint e a formatação automaticamente antes de cada commit.

## 🏗️ Arquitetura e Decisões Técnicas

- **Change Detection OnPush:** Otimização de performance garantindo que o Angular verifique mudanças apenas quando necessário.
- **Standalone Components:** Estrutura modular sem a necessidade de `NgModules`, seguindo as melhores práticas atuais do Angular.
- **Dockerização:** Build multi-stage para gerar uma imagem leve com Nginx servindo os arquivos estáticos.

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

### Próximos Passos

- [ ] Instalação e Configuração do Angular Material.
- [ ] Criação do Layout Dashboard (Menu lateral + Área de conteúdo).
- [ ] Integração com Firebase Auth.
