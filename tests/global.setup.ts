import { test as setup, expect, Locator } from "@playwright/test";
import { STORAGE_STATE } from "../playwright.config";
require("dotenv").config();

setup("do login", async ({ page }) => {
  await page.goto("/", { waitUntil: "load" });
  await page.getByRole("link", { name: "Sign In" }).click();

  await page
    .getByPlaceholder("Enter your email...")
    .fill(process.env.USER_NAME);
  await page.keyboard.press("Enter");

  await page.getByPlaceholder("Password").fill(process.env.USER_PWD);
  await page.keyboard.press("Enter");

  //   After login, it auto redirect to Home Page
  await page.waitForURL("/*", { waitUntil: "load" });

  await page.waitForTimeout(5000);

  let homeMenu: Locator = page.getByRole("link", { name: "Home" });
  await expect(homeMenu).toBeVisible();

  //   Store login stet to STORAGE_STATE
  await page.context().storageState({ path: STORAGE_STATE });
});
