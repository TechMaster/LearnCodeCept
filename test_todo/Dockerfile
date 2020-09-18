FROM alpine:latest

RUN apk add --no-cache curl bash libcap \
&& curl curl https://getcaddy.com | bash -s personal \
&& chmod 0755 /usr/local/bin/caddy \
&& addgroup -S caddy \
&& adduser -D -S -H -s /sbin/nologin -G caddy caddy \
&& setcap CAP_NET_BIND_SERVICE=+eip /usr/local/bin/caddy \
&& apk del curl bash libcap

EXPOSE 2015
WORKDIR /todomvc

COPY "./todomvc/" "/todomvc/"

RUN chown -R caddy:caddy /todomvc

USER caddy

ENTRYPOINT ["/usr/local/bin/caddy"]