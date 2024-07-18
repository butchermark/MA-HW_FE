FROM node:18.2.0-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]