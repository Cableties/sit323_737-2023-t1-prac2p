FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY calculator.js .

EXPOSE 3040

CMD [ "node", "calculator.js" ]