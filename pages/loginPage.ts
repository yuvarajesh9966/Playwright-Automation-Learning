import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async enterUsername(username: string) {
    const usernamePlaceholder = this.page.getByPlaceholder("Username");
    await usernamePlaceholder.clear();
    await usernamePlaceholder.fill(username);
  }

  async enterPassword(password: string) {
    const passwordPlaceholder = this.page.getByPlaceholder("Password");
    await passwordPlaceholder.clear();
    await passwordPlaceholder.fill(password);
  }

  async clickOnLogin() {
    const loginButton = this.page.getByRole("button", { name: "Login" });
    await loginButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickOnLogin();
  }
}
