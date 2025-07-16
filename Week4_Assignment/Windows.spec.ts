import {test,expect} from "@playwright/test"

test("Window tab Switching", async({page,context})=>{

    await page.goto("https://login.salesforce.com/")
    
    await page.locator("#username").fill("majay3574@gmail.com")

    await page.locator("#password").fill("Ajaymichael@123")

    await page.locator("#Login").click()
    
    const [allwindows] = await Promise.all([context.waitForEvent("page"), page.click('//*[@title=": Mobile Publisher"]')])

    const pages= context.pages()

    let childPage:any;

childPage=pages[1];

await childPage.click('//button[contains(text(),"Confirm")]')



const childPagetitle= await childPage.title();

expect.soft(childPagetitle).toContain('Service Cloud: AI-powered Customer Service Agent Console | Salesforce US')

console.log(childPagetitle)

await childPage.waitForLoadState();

await page.waitForTimeout(5000)

const childPageURL = await childPage.url()

expect(childPageURL).toContain('https://www.salesforce.com/service/cloud/')

console.log(childPageURL)

})