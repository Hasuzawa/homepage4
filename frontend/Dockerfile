# Create container for React frontend

FROM node:18-alpine

LABEL version="0.1"
LABEL name="frontend"
LABEL description="The homepage for Hasuzawa"
LABEL github="https://github.com/Hasuzawa/homepage4"
LABEL author="hasuzawa"

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]