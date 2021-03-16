FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json \
  .editorconfig \
  .eslintignore \
  .eslintrc \
  .prettierignore \
  .prettierrc \
  Makefile /usr/src/app/
COPY . /usr/src/app
RUN apk add make \
  && make build
RUN chmod 777 ./scripts/start.sh
EXPOSE 3000
CMD ./scripts/start.sh