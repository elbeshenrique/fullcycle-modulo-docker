FROM node:15-alpine3.12

RUN mkdir -p /var/www/html/node_modules && chown -R node:node /var/www/html

WORKDIR /var/www/html

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node /backend/. .

EXPOSE 8000

CMD [ "node", "app.js" ]