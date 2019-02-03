# GraphQL playground

```shell
npx create-react-app graphql-playground --typescript
```

## Running Hasura GraphQL server

<https://docs.hasura.io/1.0/graphql/manual/deployment/docker/index.html>

```shell
docker run -p 8080:8080 \
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres@host.docker.internal/postgres \
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
  hasura/graphql-engine:latest
```

## Generate typings and Appolo components

```shell
yarn generate
```
