import { Page } from "@playwright/test";

export class CheckoutComplete {
  constructor(private page: Page) {}

  async verifyOrderConfirmation(orderConfirm: string) {
    return await this.page.getByText(orderConfirm).isVisible();
  }
}
