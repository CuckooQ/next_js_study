export const PRODUCTS_URL = process.env.NEXT_PUBLIC_API_URL;

export const PRODUCT_URL = (id) =>
  `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
