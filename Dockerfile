FROM node:16
MAINTAINER name akib
LABEL this is a sample node.js docker file
EXPOSE 3000
WORKDIR /flm
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"] 
