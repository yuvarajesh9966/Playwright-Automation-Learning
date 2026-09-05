import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { Checkout } from "../pages/checkoutPage";
import { CheckoutOverview } from "../pages/checkoutOverviewPage";
import { CheckoutComplete } from "../pages/checkoutCompletePage";

type MyFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: Checkout;
  checkoutOverview: CheckoutOverview;
  checkoutComplete: CheckoutComplete;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new Checkout(page);
    await use(checkoutPage);
  },

  checkoutOverview: async ({ page }, use) => {
    const checkoutOverview = new CheckoutOverview(page);
    await use(checkoutOverview);
  },

  checkoutComplete: async ({ page }, use) => {
    const checkoutComplete = new CheckoutComplete(page);
    await use(checkoutComplete);
  },
});

export { expect } from "@playwright/test";
