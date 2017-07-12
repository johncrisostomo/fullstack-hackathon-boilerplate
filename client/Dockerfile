FROM node:boron

RUN mkdir /client

WORKDIR /client

COPY . /client

RUN yarn

EXPOSE 8080

CMD ["npm", "start"]
