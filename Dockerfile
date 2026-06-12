# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY redux-toolkit-version/package*.json ./

RUN npm install

COPY redux-toolkit-version .

RUN npm run build


# Production Stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]