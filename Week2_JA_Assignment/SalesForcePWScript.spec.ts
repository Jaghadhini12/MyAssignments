import test from "@playwright/test";
test.use({ headless: false }); // Set headless mode to false globally for this test file
test("SalesForce Login To HomePage", async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("#Login").click();
    await page.waitForTimeout(10000);
     
    const Title= console.log("The Title of the page is: " +await page.title())
    });





//vidyar@testleaf.com
//Sales@123