# Create Docker container of Nginx web server for React frontend

FROM nginx:alpine

LABEL version="0.1.0"
LABEL name="nginx"
LABEL description="nginx web server for React frontend"
LABEL github="https://github.com/Hasuzawa/homepage4"
LABEL author="hasuzawa"

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off"]