FROM node:14.16.1-alpine as build

WORKDIR /app
COPY app.js app.test.js package.json server.js yarn.lock ./
RUN yarn --frozen-lockfile
RUN yarn test

FROM node:14.16.1-alpine

WORKDIR /app
COPY --from=build /app/app.js /app/package.json /app/server.js /app/yarn.lock ./
RUN yarn --frozen-lockfile --production
EXPOSE 3000
CMD ["node", "server.js"]
