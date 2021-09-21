import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import { getProducts } from "../redux/modules/product";

function ProductListContainer() {
  const { isLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const getProductList = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <ProductList isLoading={isLoading} getProductList={getProductList} />;
}

export default ProductListContainer;
