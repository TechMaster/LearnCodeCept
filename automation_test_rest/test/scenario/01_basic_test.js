
Feature('Basic Operations');
// Thư viện chuyên unit test
// Trong Node.js Mocha, Chai, Assert
const assert = require('assert');

// Trong một file kiểm thư *_test.js có nhiều Scenario
// 2 loại: sync và async
Scenario('get all users', async (I) => {
  let users = await I.sendGetRequest('/users');
  assert.ok(users.data.length >= 10)
});


Scenario('get a single users', async (I) => {
  let user = await I.sendGetRequest('/users/1');
  //Lấy user có id == 1 thì dữ liệu 
  assert.strictEqual(user.data.id, 1)
});


Scenario('create new user', async (I) => {
  let users = await I.sendGetRequest('/users');
  let number_users_before_add_new = users.data.length;

  await I.sendPostRequest('/users',
    { 'name': 'X man', 'email': 'xman@gmail.com', 'pass': '23123213' }
  );

  users = await I.sendGetRequest('/users');
  //Nếu thêm mới thành công thì số lượng user phải tăng lên một
  assert.strictEqual(number_users_before_add_new + 1, users.data.length);
});

Scenario('delete a user', async (I) => {

  let new_id = await I.sendPostRequest('/users',
    { 'name': 'Albano', 'email': 'albano@gmail.com', 'pass': 'italiano' }
  );
  let result = await I.sendDeleteRequest('/users/' + new_id.data['id']);
  assert.strictEqual(result.data, true);
});