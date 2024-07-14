FROM node:lts-alpine3.20

WORKDIR /usr/src/app

# By setting NODE_ENV to production, it will install only production dependencies. Dev dependencies will not be installed.
ENV NODE_ENV=production

COPY ./package*.json /usr/src/app

# By adding --production flag, it will install only production dependencies.
RUN npm install --production

COPY ./ /usr/src/app

EXPOSE 3000

CMD ["npm","start"] 


