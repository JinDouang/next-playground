FROM node:18-alpine

# Create the directory on the node image
# where our Next.js app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json, package-lock.json and yarn.lock
# to the /app working directory
COPY ./package.json /app
COPY ./yarn.lock /app

# Install dependencies in /app
RUN yarn install

# Copy the rest of our Next.js folder into /app
COPY . /app

# Ensure port 4200 is accessible to our system
EXPOSE 4200

# Run yarn dev, as we would via the command line
CMD ["yarn", "dev"]