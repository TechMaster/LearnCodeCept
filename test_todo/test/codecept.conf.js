exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:2015', //Không cần có trail back slash /
      show: true,
      waitForAction: 800
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test_todo',
  plugins: {
    allure: {}
  }
}