# --- Build Stage ---
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies (including devDependencies for build)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine

# Copy built app to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Use custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (HTTP)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 