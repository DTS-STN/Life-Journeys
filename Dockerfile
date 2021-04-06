FROM node:alpine
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src
RUN npm i
RUN npm run build
EXPOSE 3000
CMD npm run start

