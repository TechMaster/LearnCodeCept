Feature("Upload Photo");
let faker = require("faker"); //Thư viện sinh dữ liệu giả ngẫu nhiên

Scenario("Login", I => {
  I.amOnPage("/wp-login.php");
  I.fillField("input#user_login", "user");
  I.fillField("input#user_pass", "bitnami");
  I.click("input#wp-submit");
  I.seeInCurrentUrl("/wp-admin/");

  I.amOnPage("/wp-admin/post-new.php"); //Tạo một post mới
  I.fillField("textarea#post-title-0", faker.lorem.sentence());
  I.click(
    "button.components-button.components-icon-button.editor-inserter__toggle.block-editor-inserter__toggle"
  );
  I.seeElement("div.editor-inserter__menu.block-editor-inserter__menu");
  I.click(
    "button.editor-block-types-list__item.block-editor-block-types-list__item.editor-block-list-item-paragraph"
  );
  I.fillField(
    "p.rich-text.editor-rich-text__editable.block-editor-rich-text__editable.wp-block-paragraph",
    faker.lorem.paragraphs((paragraph_count = 1), (supplemental = false))
  );
  I.click(
    "button.components-button.components-icon-button.editor-inserter__toggle.block-editor-inserter__toggle"
  );
  I.click("button.editor-block-list-item-image");
  I.wait(3);

  // I.click("button.block-editor-media-placeholder__upload-button");
  // I.wait(2);

  I.attachFile("input[type='file']", "/scenario/victoria.jpg");
  I.wait(3);
  I.click("a.components-button.editor-post-preview"); //mở cửa sổ mới
  I.wait(3); //Chớ load một chút
  I.switchToNextTab(); //Chuyển sang cửa sổ mới
  I.closeCurrentTab(); // Rồi lại đóng cửa sổ này
  I.click("button.components-button.editor-post-publish-panel__toggle");
  I.see("Are you ready to publish?");
  I.click("button.components-button.editor-post-publish-panel__toggle");
  I.waitForInvisible("View Posted");
  I.wait(10); // Phải chờ khoảng 10 giây để notification ẩn đi
  I.click("View Post");
  I.wait(3);
  I.seeElement(".wp-block-image");
});
