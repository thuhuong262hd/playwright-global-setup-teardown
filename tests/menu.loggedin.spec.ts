import { test, expect, Locator } from "@playwright/test";

require("dotenv").config();

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

  await page.goto("", { waitUntil: "load" });
  await page.waitForTimeout(5000);

  let homeMenu: Locator = page.getByRole("link", { name: "Home" });
  await expect(homeMenu).toBeVisible();
});

test("Click on Customization to open /customization", async ({ page }) => {
  // Already logged in
  let customizationMenu: Locator = page.getByRole("link", {
    name: "Customization",
  });
  await customizationMenu.click();

  await page.waitForURL("**/customization", { waitUntil: "load" });
});

test("Click on Members to open /members", async ({ page }) => {
  // Already logged in
  let membersMenu: Locator = page.getByRole("link", {
    name: "members",
  });
  await membersMenu.click();

  await page.waitForURL("**/members", { waitUntil: "load" });
});
