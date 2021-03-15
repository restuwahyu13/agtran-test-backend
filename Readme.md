### Command

#### Client

-	development
```sh
 make cserve | npm run serve
```
-	production
```sh
 make cbuild | npm run build
```

#### Server

-	development
```sh
 make dev arch=win | make dev arch=lin | npm run dev-win | npm run dev-lin
```
-	production
```sh
 make prod | npm run build
```

#### Docker

```sh
 docker-compose up -d --build
```

#### Database Migration

```sh
docker-compose exec -it webserver sh | docker exec -it <Container ID> sh
```

```sh
npx knex migrate:latest | npx knex migrate:rollback
```

### Endpoint Route

| Name             | Route                             | Method |
| ---------------- | --------------------------------- | ------ |
| register         | /users/auth/register              | POST   |
| Login            | /users/auth/login                 | POST   |
| Acitvation       | /users/auth/activation/:token     | GET    |
| Forgot Passsword | /users/auth/forgot-password       | POST   |
| Resend Token     | /users/auth/resend-token          | POST   |
| Reset Password   | /users/auth/reset-password/:token | POST   |
| Refresh Token    | /users/auth/refresh-token         | POST   |
| Google Oatuh     | /auth/google                      | GET    |
|                  | /auth/google/callback             | GET    | 