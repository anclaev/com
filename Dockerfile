#Stage 1: Angular
FROM node:18.16.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN yarn install

RUN yarn build

#Stage 2: Nginx
FROM nginx:latest

COPY --from=build /usr/local/app/dist/anclaevcom /usr/share/nginx/html

EXPOSE 80
