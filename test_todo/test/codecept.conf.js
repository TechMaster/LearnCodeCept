exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080', //Không cần có trail back slash /
      //url: 'http://todomvc.com/examples/react/#/',
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