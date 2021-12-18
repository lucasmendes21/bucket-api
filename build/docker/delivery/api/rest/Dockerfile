FROM node:14.15.2-alpine

ARG SERVER
ENV SERVER=$SERVER

WORKDIR /bucket-rest-api
COPY . .

RUN npm install
RUN npm run build 

EXPOSE 8000

CMD npm start
