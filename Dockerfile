FROM node:10.15-alpine

WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache git

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

EXPOSE 29418

CMD [ "npm", "run", "start:prod" ]
