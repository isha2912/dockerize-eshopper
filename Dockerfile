FROM node:alpine

WORKDIR /backend

COPY . .

RUN ["npm", "install"]

EXPOSE 1337

CMD ["npm", "start"]