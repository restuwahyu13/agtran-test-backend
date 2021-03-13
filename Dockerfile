FROM node:14-alpine

WORKDIR /usr/src/app

RUN apt-get update \
  && apt-get dist-upgrade -y \
  && apt-get clean \
  &&  apk add make

COPY package*.json \
  Makefile /usr/src/app/

COPY . ./usr.src/app

RUN make bprod \
  && npx knex migrate:latest

EXPOSE 3000

CMD npm start