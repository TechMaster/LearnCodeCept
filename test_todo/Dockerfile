FROM alpine:latest

RUN apk add --no-cache bash libcap nodejs npm \
&& npm install --global http-server \
&& chmod 0755 /usr/lib/node_modules/http-server/bin/http-server \
&& addgroup -S nodes \
&& adduser -D -S -H -s /sbin/nologin -G nodes nodes \
&& setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/http-server/bin/http-server \
&& apk del bash libcap

EXPOSE 2015
WORKDIR /todomvc

COPY "./todomvc/" "/todomvc/"

RUN chown -R nodes:nodes /todomvc

USER nodes

ENTRYPOINT ["/usr/lib/node_modules/http-server/bin/http-server"]