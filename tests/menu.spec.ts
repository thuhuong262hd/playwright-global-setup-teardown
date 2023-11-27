import { test, expect, Locator } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

  await page.goto("", { waitUntil: "load" });
  await page.waitForURL("**/login?**", { waitUntil: "load" });
});

test("It redirects to Login page when visitor open an url which required logged in to view", async ({
  page,
}) => {
  let loginText: Locator = page.getByText("Sign up or Log in");
  await expect(loginText).toBeVisible();
});
