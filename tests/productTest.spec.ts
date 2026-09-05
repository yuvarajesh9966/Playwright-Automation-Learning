import { test, expect } from "../fixtures/ui_fixtures";
import { backpack, bikeLight } from "../test-data/productData";

test("PROD-001 - Verify Product Catalog", async ({ page, productPage }) => {
  await productPage.gotoProductPage();

  const products = await productPage.getAllProducts();
  await expect(products).toHaveCount(6);

  for (let i = 0; i < (await products.count()); i++) {
    const name = await productPage.checkProductNamePresent(i);
    const desc = await productPage.checkProductDescPresent(i);
    const price = await productPage.checkProductPricePresent(i);
    const img = await productPage.checkProductImagePresent(i);
    const addToCart = await productPage.checkAddToCartPresent(i);

    await expect(name).toBeVisible();
    await expect(desc).toBeVisible();
    await expect(price).toBeVisible();
    await expect(img).toBeVisible();
    await expect(addToCart).toBeVisible();
  }
});

test("PROD-002 - Product Selection and Add to Cart", async ({
  page,
  productPage,
  cartPage,
}) => {
  await productPage.gotoProductPage();

  await productPage.addProductToCart("Sauce Labs Backpack");
  expect(await productPage.cartBadge()).toBe("1");
  await productPage.clickOnCart();
  expect(await cartPage.verifyProductPresent("Sauce Labs Backpack")).toBe(true);
});

test("CART-001 - Remove Product From Cart", async ({
  page,
  productPage,
  cartPage,
}) => {
  const product = "Sauce Labs Backpack";
  await productPage.gotoProductPage();

  await productPage.addProductToCart(product);
  expect(await productPage.cartBadge()).toBe("1");
  await productPage.clickOnCart();
  expect(await cartPage.verifyProductPresent(product)).toBe(true);
  await cartPage.removeProduct(product);
  expect(await cartPage.verifyProductPresent(product)).toBe(false);
});

test("CART-002 — Verify Multiple Products in Cart", async ({
  page,
  productPage,
  cartPage,
}) => {
  await productPage.gotoProductPage();

  await productPage.addProductToCart(backpack.name);
  await productPage.addProductToCart(bikeLight.name);
  expect(await productPage.cartBadge()).toBe("2");
  await productPage.clickOnCart();

  expect(await cartPage.verifyProductPresent(backpack.name)).toBe(true);
  expect(await cartPage.verifyProductPresent(bikeLight.name)).toBe(true);
  expect(await cartPage.getCartCount()).toBe(2);
  await cartPage.removeProduct(backpack.name);
  expect(await productPage.cartBadge()).toBe("1");
  expect(await cartPage.verifyProductPresent(backpack.name)).toBe(false);
  expect(await cartPage.verifyProductPresent(bikeLight.name)).toBe(true);
});
