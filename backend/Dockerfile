FROM node:14.16.1-alpine as build

WORKDIR /app
COPY . ./
RUN yarn --frozen-lockfile
RUN yarn lint
RUN yarn test

FROM node:14.16.1-alpine

WORKDIR /app
COPY --from=build /app/src src
COPY --from=build /app/package.json /app/yarn.lock ./
RUN yarn --frozen-lockfile --production
EXPOSE 3000
CMD ["node", "src/server.js"]
