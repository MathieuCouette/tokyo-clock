FROM node:14.16.1-alpine

WORKDIR /app
COPY app.js package.json yarn.lock ./
RUN yarn --frozen-lockfile --production
EXPOSE 3000
CMD ["node", "app"]
