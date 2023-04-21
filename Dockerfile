FROM node:14

WORKDIR /app

COPY . .

RUN npm ci

CMD ["tail", "-f", "/dev/null"]
