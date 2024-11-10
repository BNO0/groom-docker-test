# [WORKDIR]/build 에 build 파일 저장
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
# /etc/nginx/conf.d/default.conf : 컨테이너 안의 nginx 설정파일 경로
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html