FROM node:14.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install 
RUN npm install axios
# RUN npm install react-scripts@4.0.3 -g
# RUN npm install react-table@7.6.3
# RUN npm install redux@4.0.5
# RUN npm install styled-components@5.2.1
# RUN npm install react-router-dom@5.2.0

CMD ["npm", "start"]