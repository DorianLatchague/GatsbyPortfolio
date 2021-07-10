FROM node:12 AS build

WORKDIR /usr/src/app

COPY . .

RUN npm install 

RUN npm run build

FROM nginx:alpine

WORKDIR /var/www/public

COPY --from=build /usr/src/app/build ./

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g daemon off;"]
