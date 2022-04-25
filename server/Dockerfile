# Create a Docker container for the TS express server
FROM node:18
LABEL name="server"
LABEL description="server for React frontend"
LABEL author="hasuzawa"
ENV PORT=8080
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD npm start