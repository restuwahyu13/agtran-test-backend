## STAGE ONE
FROM node:14-alpine as vueapp
COPY package*.json \
  .dockerignore \
  vue.config.js \
  babel.config.js \
  Makefile ./
COPY . ./
RUN apk add make \
  && make build

## STAGE TWO
FROM vueapp
WORKDIR /usr/src/app/client
COPY --from=vueapp ./ ./usr/src/app/client
EXPOSE 8080
CMD npm run serve