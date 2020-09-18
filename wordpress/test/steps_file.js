
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    login(user, password) {
      console.log('Login function');
      I.amOnPage('/wp-login.php');
      I.fillField('input#user_login', user);
      I.fillField('input#user_pass', password);
      I.click('input#wp-submit');
    }

  });
}
