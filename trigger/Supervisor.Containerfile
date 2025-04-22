FROM ghcr.io/triggerdotdev/supervisor:prod-4b15439-1744928704

USER root

RUN apk add docker

USER node 