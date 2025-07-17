import test from "@playwright/test"

test("SalesForce Assignment", async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("#username").fill("majay3574@gmail.com")

await page.locator("#password").fill("Ajaymichael@123")

await page.locator("#Login").click()

await page.waitForTimeout(6000)

await page.locator('(//*[@class="slds-icon slds-icon_x-small"])[1]').click()

await page.locator("//*[contains(text(),'New Task')]//parent::a").click()

await page.locator("//input[@class='slds-combobox__input slds-input']").fill("Playwright Testing")
})

test("TestLeaf Automation", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

     await page.locator("#username").fill("DemoSalesManager")

    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator("#label").click()

     await page.waitForTimeout(6000)

    await page.getByRole("link", {name:'Leads'}).click()

    await page.locator('(//*[@class="x-grid3-viewport"]//*[@class="linktext"])[1]').click()

    await page.waitForTimeout(5000)  

})


test.only("TestLeaf Automation1", async({page})=>{

    await page.goto("https://www.myntra.com")

        await page.waitForTimeout(5000)  


     //await page.locator('(//*[@class="desktop-navLink"]//a[contains(text(),"Men")])[1]').click()
         //await page.waitForTimeout(5000)  


     await page.locator('(//*[@class="container-container container-aspectContainer"])[1]').click()

      await page.waitForTimeout(5000)  

    await page.locator('//*[@value="Roadster"]').scrollIntoViewIfNeeded()

     await page.locator('//*[@value="Roadster"]//parent::*').click()


   
})






