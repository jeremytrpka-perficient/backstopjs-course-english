module.exports = async page => {
    await page.select("select#ticket-quantity", "3");
}