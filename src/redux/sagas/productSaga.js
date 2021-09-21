import { call, put, takeEvery } from "@redux-saga/core/effects";
import {
  getProductsSuccess,
  getProductSuccess,
  getProductsFail,
  getProductFail,
  GET_PRODUCTS,
  GET_PRODUCT,
} from "../modules/product";
import { getProductsAsync, getProductAsync } from "../../services/product";

function* getProducts(_action) {
  try {
    const data = yield call(getProductsAsync);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFail(new Error(error)));
  }
}

function* getProduct(action) {
  try {
    const data = yield call(getProductAsync, action.id);
    yield put(getProductSuccess(data));
  } catch (error) {
    yield put(getProductFail(new Error(error)));
  }
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(GET_PRODUCT, getProduct);
}

export default productSaga;
