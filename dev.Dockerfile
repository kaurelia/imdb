FROM node:latest
WORKDIR /home/frontend
EXPOSE 5173 4173
CMD ["sh"]
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm run build
