Feature('homepage');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('Hello World');
  I.seeElement('h2');
  I.fillField("fname", "Trịnh");
  I.fillField("lname", "Cường");
  I.checkOption('#female');
  I.selectOption("cars", "saab");
  I.click("#showme");
});
