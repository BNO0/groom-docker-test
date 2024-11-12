# # [WORKDIR]/build 에 build 파일 저장
# FROM node:alpine as builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY ./ ./
# RUN npm run build

# FROM nginx
# EXPOSE 3000
# # /etc/nginx/conf.d/default.conf : 컨테이너 안의 nginx 설정파일 경로
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html

# https://velog.io/@g6y116/5
FROM node:alpine as build
WORKDIR /app/frontend
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:alpine
# Nginx 설정 파일 복사
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# mime.types 파일을 복사
COPY nginx/mime.types /etc/nginx/mime.types
# 빌드된 리액트 앱을 Nginx의 HTML 디렉토리로 복사
COPY --from=build /app/frontend/build /usr/share/nginx/html
# 포트 설정
EXPOSE 80
# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]