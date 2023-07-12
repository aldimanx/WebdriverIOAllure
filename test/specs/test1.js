describe("Demo Tests", () => {
  it("My 1st Test", async () => {
    browser.url("https://google.com/");
    browser.pause(2000);
    await $('[name="q"]').setValue("WebdriverIO");
    //await $('button[type="submit"]').click();
    browser.keys("Enter");
  });
});
