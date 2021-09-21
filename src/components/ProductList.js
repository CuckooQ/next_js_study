import { useEffect } from "react";
import LoadingDialog from "./LoadingDialog";
import AllProductListContainer from "../containers/AllProductListContainer";
import BestProductListContainer from "../containers/BestProductListContainer";

function ProductList(props) {
  const { isLoading, getProductList } = props;

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  if (isLoading) {
    return <LoadingDialog />;
  }

  return (
    <div>
      <BestProductListContainer />
      <AllProductListContainer />
    </div>
  );
}

export default ProductList;
