FROM node:6.13.0

WORKDIR /client/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "start"]
