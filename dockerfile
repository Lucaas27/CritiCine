FROM node:lts-alpine as dev
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]
##########################################################################################
FROM nginx:latest as prod
EXPOSE 3003
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]