FROM node:14-alpine
WORKDIR /usr/src/server
COPY package*.json \
  .editorconfig \
  .eslintignore \
  .eslintrc \
  .prettierignore \
  .prettierrc \
  Makefile /usr/src/server/
COPY . /usr/src/server
RUN apk add make \
  && make build
CMD npm start