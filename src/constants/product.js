export const PRODUCTS_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

export const PRODUCT_URL = (id) =>
  `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
