## STAGE ONE
FROM node:14-alpine as agtran-test-backend
COPY package*.json \
  .dockerignore \
  .editorconfig \
  .eslintignore \
  .eslintrc \
  .prettierignore \
  .prettierrc \
  # .env \
  Makefile ./
COPY . ./
RUN apk add make \
&& make build

## STAGE TWO
FROM agtran-test-backend
COPY --from=agtran-test-backend ./ ./usr/src/app
ENV NODE_ENV="production" \
  HOST="0.0.0.0" \
  PORT="3000" \
  URL_PROD="http://localhost:3000/api/v1" \
  PG_URI="postgres://restuwahyu13:restuwahyu13@db:5432/auth" \
  REDIS_HOST="storage" \
  REDIS_PORT="6379" \
  ACCESS_TOKEN_SECRET="cd3ba344f7abb066c80f192818f10e4126735658" \
  REFRESH_TOKEN_SECRET="bda671e118c52d0bc4e475604f630e6f4e91fefe" \
  SESSION_SECRET="abb066c80f1HGU0cGaROa7ROBekla6BuNQ" \
  SG_API_KEY="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" \
  GOOGLE_ID="AIzaSyA0JN_CZmjspRfZq5rl1SWXuKY2MtVTOm8" \
  GOOGLE_SECRET="1083598520749-j69m6i3678udpmvdud1sbqj053sudkdh.apps.googleusercontent.com"
RUN chmod 777 ./scripts/start.sh
EXPOSE 3000
CMD ./scripts/start.sh