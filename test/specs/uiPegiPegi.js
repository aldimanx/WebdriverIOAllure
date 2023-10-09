const MainPage = require("../pageobjects/mainPage");
const randomizer = require("../../support/randomizer");

const kotaList = [
  "Jakarta",
  "Bandung",
  "Bogor",
  "Bali",
  "Depok",
  "Banten",
  "Cikarang",
];
const kota = kotaList[randomizer.makeNumberUnderMax(kotaList.length)];

describe("Pegipegi", () => {
  it("search hotel function", async () => {
    browser.url("https://www.pegipegi.com/");
    await MainPage.frmSearch.setValue(kota);
    await MainPage.lstKota(kota).click();
    await MainPage.btnCari.click()
    expect(MainPage.title).toHaveText(kota);
    await browser.pause(1000);

  });
});
