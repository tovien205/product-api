# Sử dụng Node.js LTS làm base image
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ source code vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]