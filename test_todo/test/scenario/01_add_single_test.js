
Feature('add_task');

Scenario('test todo MVC', (I) => {
  I.amOnPage('/');
  I.see('todos');
  I.seeElement('.new-todo');
  I.fillField('.new-todo', 'Go to kitchen');
  I.pressKey('Enter');
  I.see('Go to kitchen');
  I.seeAttributesOnElements(".new-todo", {placeholder: "What needs to be done?"});
  I.seeElement('ul.todo-list li:last-child label');
  I.seeTextEquals('Go to kitchen', 'ul.todo-list li:last-child label');
  //I.seeElement('ul.todo-list li:last-child div input.toggle');
  I.click("ul.todo-list li:last-child div input.toggle");
  I.seeAttributesOnElements("ul.todo-list li:last-child", {class: "completed"});
  I.seeElement("button.clear-completed")
  
});
