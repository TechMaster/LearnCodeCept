# Kiểm thử ứng dụng ToDoMVC bằng CodeCept.io
## Giới thiệu

[ToDoMVC](http://todomvc.com/) là một web site chứa các mã nguồn dùng các framework khác nhau thể hiện ứng dụng quản lý nhiệm vụ, To Do List.

Có 2 cách để kiểm thử:
1. Trỏ trực tiếp vào web site http://todomvc.com/
2. Cài Docker rồi khởi động todomvc app ở cổng http://localhost:8080

Để chuyển qua lại giữa 2 cách này chỉ cần vào file codecept.conf.js sửa thuộc tính
helpers.Puppeteer.url

-  Trỏ trực tiếp todomvc trên Internet: ```helpers.Puppeteer.url=http://todomvc.com/examples/react/#/```
-  Trỏ todomvc trong docker container cổng 8080: ```helpers.Puppeteer.url=http://localhost:8080```


## Bố trí thư mục
Cho phương án todomvc trong docker container, chúng ta chuẩn bị mã nguồn ví dụ của React để vào thư mục todomvc
Phần code kiểm thử codecept để vào thư mục test.

## Cài đặt 
Để dựng được web site todomvc trong docker, chúng ta dùng [Node.js http-server](https://www.npmjs.com/package/http-server) để phục vụ ở cổng 8080.

Đảm bảo trong máy đã cài và khởi Docker daemon để dựng docker container chứa Node.js và http-server và ứng dụng todomvc.
Ngoài ra bạn cần cài đặt Node.js bản mới nhất để chạy CodeCept

```shell
$ git clone https://github.com/TechMaster/LearnCodeCept.git
$ cd test_todo
$ docker-compose up --build
$ cd todomvc_test\test
$ npm install
```

Hãy kiểm tra bằng cách mở trình duyệt ở địa chỉ http://localhost:8080

## Kiểm thử

Chạy kiểm thử
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
