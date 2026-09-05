import { Locator, Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async gotoProductPage() {
    await this.page.goto("/inventory.html");
  }

  async getAllProducts() {
    const allProducts = this.page.locator("[data-test='inventory-item']");
    return allProducts;
  }

  async checkProductNamePresent(num: number) {
    return this.page.locator("[data-test='inventory-item-name']").nth(num);
  }

  async checkProductPricePresent(num: number) {
    return this.page.locator("[data-test='inventory-item-price']").nth(num);
  }

  async checkProductDescPresent(num: number) {
    return this.page.locator("[data-test='inventory-item-desc']").nth(num);
  }

  async checkProductImagePresent(num: number) {
    return this.page.locator("[class='inventory_item_img'] img").nth(num);
  }

  async checkAddToCartPresent(num: number) {
    return this.page.getByRole("button", { name: "Add to cart" }).nth(num);
  }

  async addProductToCart(product: string) {
    const allProducts = await this.getAllProducts();
    await allProducts
      .filter({
        hasText: product,
      })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async cartBadge() {
    return await this.page
      .locator('[data-test="shopping-cart-badge"]')
      .innerText();
  }

  async clickOnCart() {
    await this.page.locator('[data-test="shopping-cart-badge"]').click();
  }
}
