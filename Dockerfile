# NuxtJS Build

FROM        node:17.5.0-alpine3.15 as nuxtjs-build
WORKDIR     /web
COPY        . /web/
RUN         npm ci && npm run build

# Server Build

FROM        node:17.5.0-alpine3.15 as server-build
WORKDIR     /web
COPY        package*.json /web/
RUN         npm ci --production

# Public Build

FROM        node:17.5.0-alpine3.15 as public-build
WORKDIR     /web
COPY        --chown=node:node . /web/
COPY        --chown=node:node --from=nuxtjs-build /web/.nuxt /web/.nuxt
COPY        --chown=node:node --from=server-build /web/node_modules /web/node_modules
USER        node
EXPOSE      ${PORT}
CMD         npm run start
