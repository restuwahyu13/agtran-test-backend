FROM node:14-alpine
WORKDIR /app
COPY package*.json \
  .editorconfig \
  .eslintignore \
  .eslintrc \
  .prettierignore \
  .prettierrc \
  Makefile /app/
COPY . /app
RUN apk add make \
  && make build
EXPOSE 3000
CMD npm start