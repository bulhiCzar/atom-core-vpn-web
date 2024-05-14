FROM node:22-alpine3.18 as build

RUN set -eux \
    & apk add \
        --no-cache \
        nodejs \
        yarn

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build

FROM httpd:2.4

COPY --from=build /app/build /usr/local/apache2/htdocs/
