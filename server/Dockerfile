FROM node:boron

RUN mkdir /server

WORKDIR /server

COPY . /server

RUN yarn

EXPOSE 3090

CMD ["npm", "run", "start"]
