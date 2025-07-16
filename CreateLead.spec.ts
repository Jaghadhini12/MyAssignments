import test, { expect } from "@playwright/test"
import { parse } from "path"

test("Create a new Lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

     await page.locator("#username").fill("DemoCSR2")

    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator("#label").click()

     await page.waitForTimeout(6000)

    await page.getByRole("link", {name:'Leads'}).click()

    await page.getByRole("link", {name:'Create Lead'}).click()

    await page.waitForTimeout(6000)


   // await page.locator("//*[contains(text(),'Salutation')]//following::*[@class='slds-truncate']").first().click()

   // await page.locator("//*[@title='Mrs.']").click()

    await page.locator("#createLeadForm_companyName").fill("TN")

    await page.locator("//input[@id='createLeadForm_firstName']").fill("Jaghadhini")

    await page.locator("//input[@id='createLeadForm_lastName']").fill("VM")

    await page.locator("#createLeadForm_personalTitle").fill("Mrs")

    await page.locator("#createLeadForm_generalProfTitle").fill("Lead")
    
    await page.locator("#createLeadForm_annualRevenue").fill("1000000")

    await page.locator("#createLeadForm_departmentName").fill("IT")

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")

    await page.locator(".smallSubmit").click()

    await expect(page.locator("#viewLead_companyName_sp")).toContainText('TN')

    await expect(page.locator("#viewLead_firstName_sp")).toHaveText('Jaghadhini')

    await expect(page.locator("#viewLead_lastName_sp")).toHaveText('VM')

    await expect(page.locator("#viewLead_departmentName_sp")).toHaveText('IT')

    await expect(page.locator("#viewLead_personalTitle_sp")).toHaveText('Mrs')

    await expect(page.locator("#viewLead_generalProfTitle_sp")).toHaveText('Lead')

    const AnnualRevenue = await page.locator("#viewLead_annualRevenue_sp").innerText()

    await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText(AnnualRevenue)
   
    console.log(AnnualRevenue)

    const TrimmedAR = parse(AnnualRevenue.replace(/[,$.]/g,""))

    console.log(AnnualRevenue)

})


test("Create and Edit new Lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("DemoCSR2")

    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator("#label").click()

     await page.waitForTimeout(6000)

     await page.getByRole("link", {name:'Leads'}).click()

     await page.getByRole("link", {name:'Find Leads'}).click()

     await page.waitForTimeout(10000)

     //await page.locator("#createLeadForm_companyName").fill("TN")

     await expect(page.locator("//*[contains(text(),'Find by')]//following::*[@name='firstName']")).toBeVisible

     await page.locator("//*[contains(text(),'Find by')]//following::*[@name='firstName']").fill("Jaghadhini")

     await page.locator('//button[contains(text(),"Find Leads")]').click()

     await page.waitForTimeout(3000)

      await page.locator('(//*[@class="x-grid3-viewport"]//*[@class="x-grid3-scroller"]//a)[1]').click()

     await page.getByText("Edit", {exact:true}).click()

     await page.locator("//*[contains(text(),'Edit Lead')]//following::input[@name='companyName']").fill("TN")

     await page.locator("#updateLeadForm_annualRevenue").fill("10000000")
    
     await page.locator("#updateLeadForm_departmentName").fill("IT")

     await page.locator("#updateLeadForm_description").fill("Editing the leads fields")
     await page.locator('//*[@class="smallSubmit"]').first().click()
     
     await page.waitForTimeout(6000)

    await expect( page.locator("#viewLead_departmentName_sp")).toHaveText("IT")

    await expect( page.locator("#viewLead_companyName_sp")).toContainText("TN")

    const NewInnerText = await page.locator('#viewLead_annualRevenue_sp').innerText()

    const  ParsedValue = NewInnerText.replace(/g[$.,]/g,"")

    console.log(ParsedValue)

    await expect( page.locator("#viewLead_annualRevenue_sp")).toContainText(ParsedValue.toString())

    console.log(await page.title())

})


test("Create a new account", async({page}) => {

    await page.goto("https://login.salesforce.com")

    await page.locator("#username").fill("majay3574@gmail.com")

    await page.locator("#password").fill("Ajaymichael@123")

    await page.locator("#Login").click()

    await page.waitForURL('**/lightning/setup/SetupOneHome/home', { timeout: 15000 });

    await expect(page).toHaveTitle(/Home \| Salesforce/);

    await expect(page).toHaveURL('https://qeagle8-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home')

    await page.locator(".slds-icon-waffle").click()

    await page.getByText("View All").click()

     await page.waitForTimeout(6000)

     await page.getByPlaceholder("Search apps or items...").fill("Service")

     await page.locator('(//*[contains(text(),"All Apps")]//following::*[contains(text(),"Service")])[1]').click()
     
     await page.waitForTimeout(6000)

     await page.getByTitle("Accounts").click()

     await page.getByRole('button', { name: 'New' }).click()

     await page.locator('(//*[contains(text(),"Account Information")]//following::*[contains(text(),"Account Name")]//following::input)[1]').fill('Jaghadhinivm')

     await page.locator('//*[@name="SaveEdit"]').click()

    await expect(page.getByText('Account "Jaghadhinivm" was created.', { exact: true })).toBeVisible();

})