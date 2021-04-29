FROM node:15-alpine3.12

WORKDIR /var/www/html

COPY backend/ .

CMD ["node", "index.js"]