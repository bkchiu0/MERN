# Using node image alpine version
FROM node:12.10.0-alpine

# The working directory in the container
WORKDIR /node/src

# Runs server.js when the container starts up
ENTRYPOINT [ "npm", "start" ]

# NODE will run on port 3001
EXPOSE 3001

# Copy everything to the working directory
# Update the .dockerignore file if anything should not be copied
COPY . ./

# Install dependencies from the package-lock.json file
RUN npm ci