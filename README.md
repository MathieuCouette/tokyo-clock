# Tokyo Clock (WIP)

A website that displays the local and Tokyo time.

## Why?

It serves as a learning ground for modern software development tools (e.g., Express, React, Kubernetes).

## How?

The application is comprised of two components: a **backend** (http://localhost:30000) and a **frontend** (http://localhost:30001).

The **backend** has a single endpoint, which responds with the Tokyo IANA time zone (`"Asia/Tokyo"`).

The **frontend** has a single page, which displays a local clock and a clock based on the time zone fetched from the backend.

## Run the unit tests

Make sure that you have Node.js installed.

```sh
cd backend
yarn --frozen-lockfile
yarn lint
yarn test
```

```sh
cd frontend
yarn --frozen-lockfile
yarn lint
yarn test
```

## Serve with Node.js

Make sure that you have Node.js installed.

```sh
cd backend
yarn --frozen-lockfile
yarn start
```

```sh
cd frontend
yarn --frozen-lockfile
yarn start
```

Hit `Ctrl+C` to shut down either server.

## Serve with Docker

Make sure that you have Docker installed, and that you don't have any Docker container running that uses a previously built image.

```sh
cd backend
docker build -t backend .
docker run -d --name backend -p 30000:30000 backend
```

```sh
cd frontend
docker build -t frontend .
docker run -d --name frontend -p 30001:30001 frontend
```

Run `docker stop {backend|frontend}` to shut down either server.

## Serve with Kubernetes

Make sure that you have Docker installed, that you don't have any Docker container running that uses a previously built image, and that you have a Kubernetes cluster running.

```sh
cd backend
docker build -t backend .
kubectl apply -f k8s.yaml
```

```sh
cd frontend
docker build -t frontend .
kubectl apply -f k8s.yaml
```

Run `kubectl delete -f k8s.yaml` to shut down either server.

## To-do

- Add Cypress integration tests
- Configure Kubernetes and Terraform to deploy to AWS or GCP
- Add code coverage
- Add a service layer to the frontend
- Improve the loading and error handling of the frontend
- Extract or replace `await act(() => Promise.resolve());`
