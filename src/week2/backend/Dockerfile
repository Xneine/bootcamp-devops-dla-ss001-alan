FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++

# Copy dependencies file dan install
COPY package*.json ./
RUN npm install --production

# Copy semua file backend
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
