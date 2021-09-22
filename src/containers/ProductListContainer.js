import ProductList from "../components/ProductList";

function ProductListContainer({ bestProducts, products }) {
  return <ProductList bestProducts={bestProducts} products={products} />;
}

export default ProductListContainer;
