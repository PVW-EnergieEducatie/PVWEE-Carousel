FROM node:16.14.0 as build
WORKDIR /app
# Install dependencies
COPY package*.json .
RUN npm i
# Copy files and build app
COPY . .
RUN npm run build


FROM nginx:1.17.8 as deploy
# Copy app from build
COPY --from=build /app/dist /usr/share/nginx/html
# Change nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Inject enviroment variables from docker into env.js on runtime
# Start nginx
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
EXPOSE 8082
