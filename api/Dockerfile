FROM node:16-alpine AS builder
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install
COPY . .
RUN yarn ts-build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/package*.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
RUN yarn install --frozen-lockfile --production=true

EXPOSE 8000

CMD ["node", "./dist/server.js"]


