# 📦 Stock Manager – Sistema de Controle de Estoque

Projeto **Full Stack** desenvolvido com foco em boas práticas de Front-end com Angular, integração com API REST, regras de negócio e preparação para ambientes reais de produção.

Este projeto simula um **MVP de controle de estoque**, permitindo cadastro, edição, visualização de produtos, controle de quantidades e indicadores básicos.

---

## 🧠 Objetivo do Projeto

Demonstrar conhecimentos práticos em:

- Estruturação de aplicações Angular
- Comunicação com API REST
- Organização de código e arquitetura
- Boas práticas de UI/UX
- Preparação para autenticação, segurança e deploy
- Evolução incremental de um sistema real

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- Angular (versão moderna)
- TypeScript
- HTML5
- CSS3 / SCSS
- Angular Signals
- RxJS
- Angular Router
- Reactive Forms

### Back-end (planejado)
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Banco de dados relacional (PostgreSQL ou MySQL)

### Outros
- Git e GitHub
- API REST
- Docker (planejado)
- Deploy em cloud (planejado)

---

## 📐 Arquitetura Front-end

- Componentes desacoplados
- Services para regras de negócio
- Modules organizados por domínio
- Guards para proteção de rotas
- Interceptors para tratamento global de erros
- Uso de OnPush Change Detection
- Estados de loading e feedback visual

---

## 📋 Funcionalidades

### Produtos
- Cadastro de produtos
- Edição de produtos
- Listagem de produtos
- Validação de formulário
- Exclusão de produtos

### Estoque
- Controle de quantidade em estoque
- Indicador de estoque crítico
- Atualização automática de métricas

### Dashboard
- Visão geral do estoque
- Indicadores resumidos
- Feedback visual de estados

---

## 🧭 Roadmap de Desenvolvimento

### Fase 1 – Setup e Estrutura Base
- [x] Criação do projeto Angular
- [x] Organização de pastas e módulos
- [x] Configuração de rotas principais
- [x] Layout base da aplicação

---

### Fase 2 – Interface e Componentes
- [ ] Tela de listagem de produtos
- [ ] Tela de cadastro de produtos
- [ ] Tela de edição de produtos
- [ ] Tela de controle de estoque

---

### Fase 3 – Regras de Negócio
- [ ] Serviço de produtos
- [ ] Serviço de estoque
- [ ] Validações de formulário
- [ ] Indicadores de estoque crítico
- [ ] Atualização de métricas no dashboard

---

### Fase 4 – Autenticação e Segurança
- [ ] Autenticação com Firebase Auth
- [ ] Guards de rotas
- [ ] Controle de permissões por perfil
- [ ] Proteção de rotas privadas

---

### Fase 5 – Qualidade e Performance
- [ ] Uso de Angular Signals
- [ ] Change Detection OnPush
- [ ] Tratamento global de erros (Interceptor)
- [ ] Loading states e feedbacks visuais

---

### Fase 6 – Deploy e Entrega
- [ ] Build de produção
- [ ] Deploy do Front-end
- [ ] Deploy do Back-end
- [ ] Configuração de ambiente

---

## ▶️ Como Executar o Projeto

### Front-end

```bash
# Instalar dependências
npm install

# Rodar aplicação
ng serve
