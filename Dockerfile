# Build Nextjs app
FROM node:18 AS builder
WORKDIR /app
COPY next-server ./
RUN corepack enable && corepack prepare pnpm@latest-8 --activate && pnpm fetch 
RUN pnpm install -r --offline 
RUN pnpm run build

# Copy built Nextjs app
FROM ubuntu:20.04 AS runner

ENV NODE_ENV production

WORKDIR /app
RUN apt-get update && apt-get upgrade
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -&&\
   apt-get install -y nodejs

RUN mkdir standalone

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static .next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]