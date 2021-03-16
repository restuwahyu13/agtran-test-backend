FROM node:14-alpine
WORKDIR /usr/src/app/client
COPY package*.json \
   babel.config.js \
   vue.config.js /usr/src/app/client/
COPY . /usr/src/app/client/
RUN npm install \
  && npm run build