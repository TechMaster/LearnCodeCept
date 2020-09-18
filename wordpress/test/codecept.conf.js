exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1600x1000',
    }
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        admin: {
          login: async (I) => {  // If you use async function in the autoLogin plugin
            I.amOnPage('/wp-login.php');
            I.fillField('input#user_login', "user");
            I.fillField('input#user_pass', 'bitnami');
            I.click('input#wp-submit');
          },
          check: (I) => {
            I.seeInCurrentUrl('/wp-admin/');
          },
        }
      }
    }
  },

  bootstrap: null,
  mocha: {},
  name: 'test_wordpress'
}