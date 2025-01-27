FROM node:23.6.1-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm install -g ts-node typescript
RUN npm install
COPY . .

CMD [ "npm", "run", "prod" ]