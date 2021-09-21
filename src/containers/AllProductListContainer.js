import { useSelector } from "react-redux";
import AllProductList from "../components/AllProductList";

function AllProductListContainer() {
  const { products } = useSelector((state) => state.product);

  return <AllProductList products={products} />;
}

export default AllProductListContainer;
