import AllProductListContainer from "../containers/AllProductListContainer";
import BestProductListContainer from "../containers/BestProductListContainer";

function ProductList(props) {
  const { products, bestProducts } = props;

  return (
    <div>
      <BestProductListContainer bestProducts={bestProducts} />
      <AllProductListContainer products={products} />
    </div>
  );
}

export default ProductList;
