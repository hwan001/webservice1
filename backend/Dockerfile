# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Install build tools
RUN apk add --no-cache make gcc g++ python3

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build bcrypt from source
RUN npm rebuild bcrypt --build-from-source

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD ["node", "index.js"]
