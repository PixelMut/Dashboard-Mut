#From nginx:alpine
#WORKDIR /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY dist/ .


FROM node:12.18.3-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/dashboard-mut/ /usr/share/nginx/html
