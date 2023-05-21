FROM ubuntu:20.04 AS runner

ENV NODE_ENV production
ENV HOSTNAME localhost

WORKDIR /app
RUN apt-get update && apt-get upgrade
RUN apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -&&\
   apt-get install -y nodejs

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs next-server/public public
COPY --chown=nextjs:nodejs next-server/.next/standalone ./
COPY --chown=nextjs:nodejs next-server/.next/static .next/static
COPY --chown=nextjs:nodejs run/* ./


USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["/bin/sh", "docker-run.sh"]