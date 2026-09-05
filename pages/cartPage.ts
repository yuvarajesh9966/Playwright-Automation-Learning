import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductPresent(product: string) {
    const allProducts = await this.page.locator("[data-test='inventory-item']");
    const count = await allProducts
      .filter({
        hasText: product,
      })
      .count();
    return count > 0;
  }

  async removeProduct(product: string) {
    const allProducts = await this.page.locator("[data-test='inventory-item']");
    await allProducts
      .filter({
        hasText: product,
      })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  async getCartCount() {
    const allProducts = await this.page.locator("[data-test='inventory-item']");
    const count = await allProducts.count();
    return count;
  }

  async clickOnCheckout() {
    await this.page.getByRole("button", { name: "Checkout" }).click();
  }
}
