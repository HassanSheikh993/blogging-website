# FROM node:20

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# EXPOSE 5173

# CMD ["npm", "run", "dev", "--", "--host"]

FROM node:24-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html


