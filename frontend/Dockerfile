# 베이스 이미지로 Node.js를 사용합니다.
FROM node:14

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# package.json과 package-lock.json을 복사합니다.
COPY package*.json ./

# 의존성을 설치합니다.
RUN npm install

# 앱 소스를 복사합니다.
COPY . .

# 앱을 빌드합니다.
RUN npm run build

# Nginx를 사용하여 빌드된 앱을 서빙합니다.
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Nginx의 기본 포트를 엽니다.
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
