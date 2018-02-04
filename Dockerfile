FROM node:9.5

COPY package.json .postcssrc tsconfig.json /app/
WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL=warn
RUN npm install

RUN chown -R node /app/
USER node

CMD ["npm", "run", "start"]
