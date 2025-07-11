

import { chromium, test } from "@playwright/test";

test("To launch a Flipkart", async () => {

const browserInstance = await chromium.launch({ headless: false, channel: 'msedge'});

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://www.flipkart.com/");

await page.waitForTimeout(3000);

const pageURL = page.url();
    console.log(`URL: ${pageURL}`);

    const pageTitle = await page.title();
    console.log(`Title: ${pageTitle}`);

});