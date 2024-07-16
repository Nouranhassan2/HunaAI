FROM node:18-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build
FROM nginx:latest
COPY --from=build /app/src/dist/huna-ai/ /usr/share/nginx/html
