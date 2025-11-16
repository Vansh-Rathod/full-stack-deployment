# --------------------------
# 1. Build Stage
# --------------------------
# Use official Node.js image
FROM node:22-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

#Convert the React code into raw HTML, CSS, JS
RUN npm run build

#PRODUCTION STAGE
# --------------------------
# 2. Run Stage
# --------------------------

FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
