//<input id="email" class="input-field" type="text" name="userEmail">
//<button class="btn submit-btn" type="submit">Submit</button>
 
a) Select by ID
//#id
   // #email
await page.locator("#email").fill("vidyar@testleaf.com");

b) Select by Class
.input-field
await page.locator("#input-field").fill("vidyar@testleaf.com");

c) Select using attribute
input[id='email']
button[class=btn submit-btn]


CSS selector
await page.locator(".btn submit-btn").click()

getByRole
await page.getByRole('button',{name:Submit}).click()


XPath
await page.locator('//button[@class="btn submit-btn"]').click()


