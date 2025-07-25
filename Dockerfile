# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# App binds to port defined by Cloud Run
ENV PORT=8080
EXPOSE 8080

# Start the app
CMD [ "node", "index.js" ]