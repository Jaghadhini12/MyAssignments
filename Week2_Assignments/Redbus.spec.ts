import { firefox, test } from "@playwright/test";

test("To launch a RedBus", async () => {

const browserInstance = await firefox.launch({ headless: false});

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://www.redbus.in/");

await page.waitForTimeout(3000);

});