FROM php:7.2-cli
ADD . /var/app
WORKDIR /var/app
RUN npm install
CMD npm start
EXPOSE 5000