FROM node:16.14.0-alpine3.15 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json .
RUN npm i

COPY . .
RUN npm run build


FROM nginx:1.17.8-alpine as deploy
EXPOSE 8082

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]