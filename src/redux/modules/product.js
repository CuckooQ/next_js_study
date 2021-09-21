/* ACTION TYPES */
const PREFIX = "next_study/product";
export const GET_PRODUCTS = PREFIX + "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = PREFIX + "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAIL = PREFIX + "GET_PRODUCTS_FAIL";
export const GET_PRODUCT = PREFIX + "GET_PRODUCT";
const GET_PRODUCT_SUCCESS = PREFIX + "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAIL = PREFIX + "GET_PRODUCT_FAIL";

/* ACTION CREATORS */
export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}
export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}
export function getProductsFail(error) {
  return {
    type: GET_PRODUCTS_FAIL,
    error,
  };
}
export function getProduct(id) {
  return {
    type: GET_PRODUCT,
    id,
  };
}
export function getProductSuccess(product) {
  return {
    type: GET_PRODUCT_SUCCESS,
    product,
  };
}
export function getProductFail(error) {
  return {
    type: GET_PRODUCT_FAIL,
    error,
  };
}

/* REDUCER */
const initState = {
  products: [],
  bestProducts: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};
function productReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      const newState = { ...state };
      newState.products = [];
      newState.bestProducts = [];
      newState.selectedProduct = null;
      newState.isLoading = true;
      newState.error = null;
      return newState;
    }
    case GET_PRODUCTS_SUCCESS: {
      const newState = { ...state };
      newState.products = action.products;
      newState.bestProducts = newState.products
        .sort((prodA, prodB) => prodA.rating - prodB.rating)
        .slice(0, 6);
      newState.selectedProduct = null;
      newState.isLoading = false;
      newState.error = null;
      return newState;
    }
    case GET_PRODUCTS_FAIL: {
      const newState = { ...state };
      newState.products = [];
      newState.bestProducts = [];
      newState.selectedProduct = null;
      newState.isLoading = false;
      newState.error = action.error;
      return newState;
    }
    case GET_PRODUCT: {
      const newState = { ...state };
      newState.selectedProduct = null;
      newState.isLoading = true;
      newState.error = null;
      return newState;
    }
    case GET_PRODUCT_SUCCESS: {
      const newState = { ...state };
      newState.selectedProduct = action.product;
      newState.isLoading = false;
      newState.error = null;
      return newState;
    }
    case GET_PRODUCT_FAIL: {
      const newState = { ...state };
      newState.selectedProduct = null;
      newState.isLoading = false;
      newState.error = action.error;
      return newState;
    }
    default:
  }

  return state;
}

export default productReducer;
