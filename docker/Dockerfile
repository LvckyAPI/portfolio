FROM node:21.7.3-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install -g ts-node typescript
RUN npm install
COPY . .

CMD [ "npm", "run", "prod" ]