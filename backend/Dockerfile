# Create a Docker container for the TS express server

FROM node:18-alpine

LABEL version="0.1.0"
LABEL name="backend"
LABEL description="express backend for React frontend"
LABEL github="https://github.com/Hasuzawa/homepage4"
LABEL author="hasuzawa"

WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD npm start