module.exports = async page => {
    await page.type("input#first-name", "Jeremy");
    await page.type("input#last-name", "Trpka");
    await page.type("input#email", "atlantis1982@gmail.com");
    await page.click("input#agree");
}