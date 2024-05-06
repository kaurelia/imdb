FROM node:latest AS builder
WORKDIR /home/frontend
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm run build
FROM nginx:latest
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80 443
COPY --from=builder /home/frontend/dist /usr/share/nginx/html
COPY --from=builder /home/frontend/nginx.conf /etc/nginx/conf.d/default.conf
