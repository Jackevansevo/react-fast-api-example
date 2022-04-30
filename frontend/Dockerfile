from node:alpine

WORKDIR /app

RUN apk update && apk upgrade && apk add build-base python3

COPY package-lock.json . package.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 1234/tcp

CMD ["npm", "run", "serve"]
