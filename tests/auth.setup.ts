import { test, expect } from "../fixtures/ui_fixtures";
import { validLogin } from "../test-data/loginData";

test("Authentication Setup", async ({ page, loginPage }) => {
  await page.goto("/");
  await loginPage.login(validLogin.username, validLogin.password);
  await expect(page).toHaveURL("/inventory.html");

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});
