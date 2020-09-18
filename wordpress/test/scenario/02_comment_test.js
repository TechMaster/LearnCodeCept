Feature('Comment');
let faker = require('faker');
Before((I) => {
  I.amOnPage('/');
});

Scenario('Comment on every posts', async (I) => {
  let numPosts = await I.grabNumberOfVisibleElements('h2.entry-title.heading-size-1');
  console.log("Number posts visible = " + numPosts);
  //cách này không chạy I.waitForElement('h2.entry-title.heading-size-1:nth-child(2)');
  I.seeNumberOfVisibleElements('h2.entry-title.heading-size-1', numPosts);
  for (let i = 1; i <= numPosts; i++) {
    let postlink = locate('h2.entry-title.heading-size-1 a').at(i);
    I.seeElement(postlink);
    let title = await I.grabTextFrom(postlink);
    console.log(title);
    I.click(postlink);
    within('form#commentform', () => {
      I.fillField('textarea#comment', faker.lorem.paragraph());
      I.fillField('input#author', faker.name.findName());
      I.fillField('input#email', faker.internet.email());
      I.fillField('input#url', faker.internet.url());
      I.click('input#submit');
      I.wait(5); //Cần phải chậm lại, nếu không WordPress sẽ block không cho comment tiếp theo
    });
    I.amOnPage('/');    
  }
});