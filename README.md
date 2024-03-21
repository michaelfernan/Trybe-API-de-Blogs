# API de Blog 

## Descrição
Este projeto, realizado individualmente como parte da avaliação da Trybe, envolve o desenvolvimento de uma API para um blog. A API permite a gestão de usuários, categorias, posts de blog e funcionalidades de pesquisa, utilizando autenticação e operações CRUD.

## Requisitos do Projeto

### Migrações e Modelos
1. **Migrações:** Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`.
2. **Modelo User:** Desenvolva o modelo `User` com as propriedades corretas.
3. **Modelo Category:** Desenvolva o modelo `Category`.
4. **Modelo BlogPost:** Crie o modelo `BlogPost` com as associações corretas.
5. **Modelo PostCategory:** Desenvolva o modelo `PostCategory` respeitando as associações.

### Endpoints
6. **POST /login:** Crie um endpoint para autenticação de usuários.
7. **POST /user:** Endpoint para registrar novos usuários.
8. **GET /user e /user/:id:** Endpoints para listar usuários.
9. **POST /categories:** Endpoint para adicionar novas categorias.
10. **GET /categories:** Endpoint para listar categorias.
11. **POST /post:** Endpoint para criar novos posts de blog.
12. **GET /post e /post/:id:** Endpoints para listar posts de blog.
13. **PUT /post/:id:** Endpoint para atualizar um post de blog.
14. **DELETE /post/:id:** Endpoint para deletar um post de blog.
15. **DELETE /user/me:** Endpoint para deletar o usuário autenticado.
16. **GET /post/search?q=:searchTerm:** Endpoint para buscar posts de blog por termos.

### Testes
- Desenvolva testes para garantir a cobertura e funcionalidade dos endpoints.

## Tecnologias Utilizadas
- Node.js
- Express
- JWT para autenticação
- Sequelize como ORM
- MySQL para o banco de dados

## Objetivos de Aprendizado
- Construir uma API RESTful com autenticação.
- Aplicar operações CRUD em um banco de dados relacional.
- Implementar relacionamentos entre tabelas em um banco de dados.
- Desenvolver testes automatizados para a API.

## Desenvolvimento
- As regras de negócio e validações devem seguir rigorosamente os requisitos.
- O código deve aderir às boas práticas e padrões estabelecidos.

## Notas Adicionais
- Este projeto é parte crucial da avaliação e do aprendizado em desenvolvimento backend na Trybe.
- A documentação clara e a organização do código são fundamentais.

## Contribuições
Este é um projeto individual de avaliação, e as contribuições externas não são aplicáveis.

