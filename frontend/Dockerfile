
FROM node:12-alpine as base
RUN apk add --no-cache bash
WORKDIR /src
COPY ./frontend/package.json ./frontend/package-lock.json /src/
COPY /frontend /src
EXPOSE 8080

COPY ./frontend/frontend-entrypoint.sh /frontend-entrypoint.sh

FROM base as production
ENV NODE_ENV=production
RUN npm install --production
CMD ["node", "index.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
CMD ["npm", "start"]
