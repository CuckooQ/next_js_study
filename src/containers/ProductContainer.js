import { useSelector } from "react-redux";
import Product from "../components/Product";

function ProductContainer() {
  const { selectedProduct } = useSelector((state) => state.product);

  return <Product product={selectedProduct} />;
}

export default ProductContainer;
