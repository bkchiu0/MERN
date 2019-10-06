# Using node image alpine version
FROM node:12.10.0-alpine

# Sets the working directory of the following commands
WORKDIR /react/src

# Expose port 3000
EXPOSE 3000

# Runs server.js when the container starts up
ENTRYPOINT [ "npm", "start" ]

# Copy the code to the container
COPY . ./

# Install node module dependencies from the package-lock.json file
RUN npm ci