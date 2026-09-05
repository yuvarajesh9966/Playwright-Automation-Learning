import { Page } from "@playwright/test";

export class Checkout {
  constructor(private page: Page) {}

  async enterFirstName(fistName: string) {
    await this.page.getByPlaceholder("First Name").fill(fistName);
  }

  async enterLastName(lastName: string) {
    await this.page.getByPlaceholder("Last Name").fill(lastName);
  }

  async enterPostalCode(postalCode: string) {
    await this.page.getByPlaceholder("Zip/Postal Code").fill(postalCode);
  }

  async clickOnContinue() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async fillCheckoutDetailsAndContinue(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalCode(postalCode);
    await this.clickOnContinue();
  }
}
