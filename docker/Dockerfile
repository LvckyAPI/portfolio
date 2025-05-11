FROM node:22.15.0-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm install -g ts-node typescript
RUN npm install
COPY . .

CMD [ "npm", "run", "prod" ]