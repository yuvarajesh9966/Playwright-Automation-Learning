import { test, expect } from "../fixtures/ui_fixtures";
import { invalidLogin, validLogin, lockedUser } from "../test-data/loginData";

test("Valid Login", async ({ page, loginPage }) => {
  await page.goto("/");
  await loginPage.login(validLogin.username, validLogin.password);
  await expect(page).toHaveURL("/inventory.html");
});

test("Invalid Login", async ({ page, loginPage }) => {
  await page.goto("/");
  await loginPage.login(invalidLogin.username, invalidLogin.password);
  await expect(page.getByText(invalidLogin.expectedResult)).toBeVisible();
});

test("Locked user", async ({ page, loginPage }) => {
  await page.goto("/");
  await loginPage.login(lockedUser.username, lockedUser.password);
  await expect(page.getByText(lockedUser.expectedResult)).toBeVisible();
});
