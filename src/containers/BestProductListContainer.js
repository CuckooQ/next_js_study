import { useSelector } from "react-redux";
import BestProductList from "../components/BestProductList";

function BestProductListContainer() {
  const { bestProducts } = useSelector((state) => state.product);

  return <BestProductList products={bestProducts} />;
}

export default BestProductListContainer;
