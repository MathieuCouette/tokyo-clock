FROM node:14.16.1-alpine as build

WORKDIR /app
COPY public public
COPY src src
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
RUN yarn lint
RUN yarn test --watchAll=false
RUN yarn build

FROM nginx:1.20.0-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
