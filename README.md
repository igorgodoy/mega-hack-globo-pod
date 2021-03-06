# GloboPod

A fim de solucionar o problema proposto pela Globo na segunda edição do Mega Hack, contruí junto do time 85 o GloboPod, aplicação digna do TOP 10 do desafio.

A proposta da aplicação é unificar todos os serviços da globo numa única plataforma e integrar um serviço de 'party' para consumo de contedos em vídeo em conjunto e em tempo real.

## Iniciando a aplicação

Para inciar o projeto será necessário:

- Docker
- Node
- React Native
- Yarn

### Pré-requisitos

Subindo a base de dados:

```sh
docker run --name db-name -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

Você poderá criar uma base de dados dentro de seu container.

Obs: Vocé pode escolher qualquer nome para a base de dados, devendo somente alterar no arquivo `ormconfig.json` dentro da pasta `backend`, assim como valores referente ao ambiente (usuario, host, etc).

É necessário rodar as migrations para que o TypeORM crie as tabelas necessárias no banco de dados, através do comando:

```
yarn typeorm migration:run
```

Instalando as dependências.

```
yarn
```

Em todos os diretórios, basta utilizar o comando acima (com o yarn previamente instalado) para instalar todas as dependências necessárias para cada projeto.

Para iniciar o back-end do projeto:

```
yarn dev:server
```

Para iniciar o projeto Mobile:

- Necessário dispositivo físico ou emulador configurado

```
yarn start
yarn android || yarn ios
```
