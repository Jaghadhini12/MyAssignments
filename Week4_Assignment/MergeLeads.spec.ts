import test, { expect } from "@playwright/test"
import { parse } from "path"

test("Create a new Lead", async({page, context}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

     await page.locator("#username").fill("DemoSalesManager")

    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator("#label").click()

     await page.waitForTimeout(6000)

    await page.getByRole("link", {name:'Leads'}).click()

    await page.getByRole("link", {name:'Merge Leads'}).click()

    await page.waitForTimeout(6000)

   // await page.locator('//*[@id="partyIdFrom"]//following::a[1]').click()

    const pagepromise1 = context.waitForEvent("page")

    await page.locator('//*[@id="partyIdFrom"]//following::a[1]').click()

    const page11= await pagepromise1

      await page11.waitForLoadState();

      const page1= await page11.title()

    console.log("Title of ChildPage1 is", page1)

    await page11.locator('(//*[@class="x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first "]//a)[1]').click()

     

    const pagepromise2 = context.waitForEvent("page")

    await page.locator('//*[@id="partyIdFrom"]//following::a[2]').click()

    const page22= await pagepromise2 

    await page11.waitForLoadState();   

    const page2= await page22.title()

    console.log("Title of ChildPage2 is", page2)


    await page22.locator('(//*[@class="x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first "]//a)[2]').click()

    
    await page.locator('.buttonDangerous').click()

    await page.waitForTimeout(3000)

    const PageTitle = await page.title()

    console.log("Title of Parent Page is:", PageTitle)


})