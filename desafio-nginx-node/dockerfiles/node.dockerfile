FROM node:15-alpine3.12

WORKDIR /var/www/html

COPY backend/ .

RUN npm install

EXPOSE 8000

CMD [ "node", "app.js" ]