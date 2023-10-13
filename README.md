# Título do Projeto: Aplicação Desktop com API REST Interna

## Descrição

O projeto tem como objetivo desenvolver uma aplicação desktop multiplataforma que funcione como uma interface de usuário intuitiva e amigável para interagir com uma API REST interna. A aplicação permite aos usuários realizar várias operações e consultas de dados por meio de uma interface de desktop responsiva e eficiente.

## Objetivo

O objetivo principal deste projeto é criar uma aplicação desktop que ofereça as seguintes funcionalidades:

1. **Interface Gráfica**: Desenvolver uma interface de desktop usando Electron.js, que fornece uma experiência do usuário rica e responsiva.

2. **API REST Interna**: Implementar uma API REST usando Node.js e Express.js para gerenciar operações de CRUD (Create, Read, Update, Delete) em um banco de dados SQLite.

3. **Banco de Dados**: Utilizar o Sequelize.js para definir e gerenciar modelos de dados e realizar operações de banco de dados no SQLite.

4. **Funcionalidades da Aplicação Desktop**: Permitir que os usuários realizem as seguintes ações por meio da interface desktop:
   - Visualização e pesquisa de registros existentes no banco de dados.
   - Adição, edição e exclusão de registros.
   - Integração de funcionalidades de filtro e classificação de dados.
   - Respostas amigáveis e feedback ao usuário.

## Tecnologias

- Electron.js: Para a criação da aplicação desktop multiplataforma.
- Node.js e Express.js: Para o desenvolvimento da API REST interna.
- Sequelize.js: Para definir e gerenciar modelos de dados e operações de banco de dados.
- SQLite: Como o banco de dados local para armazenamento de dados.

## Entregáveis

Os principais entregáveis deste projeto incluem:

1. Aplicação desktop funcional com uma interface gráfica amigável.
2. API REST interna que gerencia operações de CRUD e interage com o banco de dados SQLite.
3. Documentação técnica que explica a arquitetura, os modelos de dados e as instruções de uso.

**Nota**: Este projeto tem como foco a criação de uma aplicação desktop eficaz e sua integração com uma API REST interna para fornecer aos usuários uma maneira fácil de interagir com os dados. A escolha de utilizar o SQLite como banco de dados permite a portabilidade e a facilidade de implantação da aplicação em diferentes plataformas.

# Guia de Uso da Aplicação

Bem-vindo à aplicação "My App Electron". Este guia fornecerá instruções sobre como usar a aplicação para interagir com a API REST interna e realizar diversas tarefas.

## Iniciando a Aplicação

Para iniciar a aplicação, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema. Se ainda não tiver, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Abra um terminal ou prompt de comando.

3. Navegue até o diretório raiz do projeto.

# Sistema ElectronAPIManager

Bem-vindo ao Sistema ElectronAPIManager! Este é um aplicativo desktop que permite interagir com uma API REST interna e gerenciar dados de forma eficiente. Abaixo estão as instruções para instalar e executar o sistema em sua máquina.

## Instalação

Antes de iniciar o sistema, é necessário instalar as dependências. Certifique-se de que você tenha o Node.js instalado. Em seguida, abra um terminal ou prompt de comando e navegue até o diretório raiz do projeto. Execute o seguinte comando para instalar os módulos do Node:

```bash
npm install
```
Isso instalará todas as dependências necessárias.

# Executando o Sistema
Após a instalação dos módulos, você pode iniciar o sistema. Para fazer isso, execute o seguinte comando:

```bash
npm start
```
Isso iniciará o aplicativo ElectronAPIManager, e a interface do sistema será exibida na tela.

# Compilando o Projeto para um Executável Desktop
Se desejar compilar o projeto em um executável desktop para distribuição, você pode usar o seguinte comando:

```bash
npm run make
```
Isso criará um executável desktop para a plataforma de destino, que você pode distribuir e instalar em outros sistemas.

# Suporte e Contato
Se você encontrar algum problema ou tiver alguma dúvida, não hesite em entrar em contato com o autor do projeto:

Nome: Alison Reges
Email: alisonreges@gmail.com

# Licença
Este sistema é distribuído sob a licença MIT. Consulte o arquivo "LICENSE" no diretório do projeto para obter mais informações sobre a licença.

Obrigado por usar o Sistema ElectronAPIManager. Esperamos que ele atenda às suas necessidades e facilite a interação com a API REST interna.