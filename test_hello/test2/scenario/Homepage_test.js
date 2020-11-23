Feature('Homepage');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('Hell World');
  I.see("This is so coool");
});
