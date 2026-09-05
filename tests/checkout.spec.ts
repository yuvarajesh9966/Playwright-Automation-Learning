import { test, expect } from "../fixtures/ui_fixtures";
import { backpack } from "../test-data/productData";
import { customer1 } from "../test-data/checkoutData";

test("@smoke CHECKOUT-001 - Complete Purchase", async ({
  page,
  productPage,
  cartPage,
  checkoutPage,
  checkoutOverview,
  checkoutComplete,
}) => {
  await productPage.gotoProductPage();
  await productPage.addProductToCart(backpack.name);
  await productPage.clickOnCart();
  expect(await cartPage.verifyProductPresent(backpack.name)).toBe(true);
  await cartPage.clickOnCheckout();
  await checkoutPage.fillCheckoutDetailsAndContinue(
    customer1.firstName,
    customer1.lastName,
    customer1.postal,
  );

  await checkoutOverview.verifyCheckoutOverview();
  await checkoutOverview.verifyProductPresent(backpack.name);
  await checkoutOverview.clickOnFinish();
  expect(
    await checkoutComplete.verifyOrderConfirmation("Thank you for your order!"),
  ).toBe(true);
});
