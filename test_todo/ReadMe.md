# Kiểm thử ứng dụng ToDoMVC bằng CodeCept.io
## Giới thiệu

[ToDoMVC](http://todomvc.com/) là một web site chứa các mã nguồn dùng các framework khác nhau thể hiện ứng dụng quản lý nhiệm vụ, To Do List.

Chúng ta sẽ lấy một mã nguồn ví dụ của React để vào thư mục todomvc
Phần code kiểm thử codecept để vào thư mục test.

Để dựng được web site, tôi sẽ dùng [caddy](https://caddyserver.com/) để phục vụ
ứng dụng todomvc ở cổng 2015.


## Cài đặt 
Đảm bảo trong máy đã cài và khởi Docker daemon để dựng docker container chứa Caddy và ứng dụng todomvc.
Ngoài ra bạn cần cài đặt Node.js bản mới nhất để cài CodeCept

```shell
$ git clone https://github.com/TechMaster/todomvc_test.git
$ cd todomvc_test
$ docker-compose up -d
$ cd todomvc_test\test
$ npm install
```

Hãy kiểm tra bằng cách mở trình duyệt ở địa chỉ http://localhost:2015

## Kiểm thử

Cài đặt các thư
```shell
$ cd todomvc_test\test
$ npx codeceptjs run --verbose
```

Muốn xuất ra báo cáo hãy sử dụng plugins allure trong file codecept.conf.js
```json
  plugins: {
    allure: {}
  }
```
Cài đặt allure
```shell
$ npm install -g allure-commandline --save-dev
$ npx codeceptjs run --plugins allure
$ allure serve output
```
