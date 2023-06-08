FROM node:16-alpine
WORKDIR /app
COPY package*.json /app

RUN npm install
COPY . /app

RUN find /app

RUN npm run build
EXPOSE 3000

CMD [ "node",  "dist/main.js"]