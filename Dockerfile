FROM node:10.15-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

EXPOSE 29418

CMD [ "npm", "run", "start:prod" ]
