# Base stage
FROM node:lts-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm audit fix --audit-level=none
COPY . .

# Development stage
FROM base as dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build stage
FROM base as build
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then \
    npm run build; \
  elif [ "$NODE_ENV" = "staging" ]; then \
    npm run build:staging; \
  fi

# Production stage
FROM nginx:latest as prod
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
