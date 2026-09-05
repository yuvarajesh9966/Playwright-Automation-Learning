interface ProductData {
  name: string;
}

export const backpack: ProductData = {
  name: "Sauce Labs Backpack",
};

export const bikeLight: ProductData = {
  name: "Sauce Labs Bike Light",
};

export const products: ProductData[] = [backpack, bikeLight];
