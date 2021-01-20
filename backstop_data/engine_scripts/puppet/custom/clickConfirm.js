const fillOutRequiredFields = require('./fillOutRequiredFields');

module.exports = async page => {
    await fillOutRequiredFields(page);
    await page.click('button[type="submit"]');
}