import axios from "axios";
import { PRODUCTS_URL, PRODUCT_URL } from "../constants/product";

export async function getProductsAsync() {
  const res = await axios.get(PRODUCTS_URL);
  return res.data;
}

export async function getProductAsync(id) {
  const res = await axios.get(PRODUCT_URL(id));
  return res.data;
}
