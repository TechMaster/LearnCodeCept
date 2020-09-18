
Feature('add_task');
Before((I) => {
  I.amOnPage('/');
});

Scenario('adding multi tasks', (I) => {
  //I.amOnPage('/');
 
  var tasks = ['Do home work', 'Have lunch', 'Go to sleep', 'Clean the house', 'Go to grocessry',
  'Take dog for walk', 'Call mom', 'Prepare dinner'];
  for (i in tasks) {
    I.fillField('.new-todo', tasks[i]);
    I.pressKey('Enter');
  }
  I.seeNumberOfElements('ul.todo-list li', tasks.length);
  I.seeElement("input.toggle-all");
  I.click("label[for=toggle-all]");
  I.see("0 items left");
  I.click("button.clear-completed");
  I.dontSeeElement('section.main');
  I.dontSeeElement('footer.footer');
});


// Hãy so sánh sự khác biệt với script trước nhé
let tasks = new DataTable(['task']);
tasks.add(['Learn Japanese']); // adding records to a table
tasks.add(['Code mobile app']);
tasks.add(['Take girl friend to cinema']);

Data(tasks).Scenario('Add Task', (I, current) => {
  I.fillField('.new-todo', current.task);
  I.pressKey('Enter');
});
