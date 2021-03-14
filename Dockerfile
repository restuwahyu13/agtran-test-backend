## STAGE ONE

FROM node:14-alpine as agtran-test-backend
COPY package*.json \
  Makefile ./
COPY . ./
RUN apk add make

## STAGE TWO

FROM agtran-test-backend
COPY --from=agtran-test-backend ./ ./usr/src/app
RUN make build
EXPOSE 3000
CMD npm start