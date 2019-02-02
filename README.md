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

## Exporting the GraphQL schema

```shell
yarn run apollo schema:download \
  --endpoint=http://localhost:8080/v1alpha1/graphql \
  schema.json
```

## Generate TypeScript typings

```shell
yarn run apollo codegen:generate \
  --localSchemaFile=schema.json \
  --target=typescript \
  --includes=src/**/*.ts \
  --tagName=gql \
  --addTypename \
  --globalTypesFile=src/types/graphql-global-types.ts \
  types
```
