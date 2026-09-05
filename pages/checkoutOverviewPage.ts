import { Page } from "@playwright/test";

export class CheckoutOverview {
  constructor(private page: Page) {}

  async verifyCheckoutOverview() {
    return await this.page.getByText("Checkout: Overview").isVisible();
  }

  async verifyProductPresent(product: string) {
    const allProducts = await this.page.locator('[data-test="inventory-item"]');
    return (await allProducts.filter({ hasText: product }).count()) > 0;
  }

  async clickOnFinish() {
    await this.page.getByRole("button", { name: "Finish" }).click();
  }
}
