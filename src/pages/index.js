import wrapper from "../redux/store";
import { END } from "redux-saga";
import ProductListContainer from "../containers/ProductListContainer";
import { getProducts } from "../redux/modules/product";

function Home({ title, description, bestProducts, products }) {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="decsription" content={description} />
      </head>
      <ProductListContainer bestProducts={bestProducts} products={products} />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async (_) => {
  const title = "HOME | CuckooQ";
  const description = "CuckooQ Home";
  store.dispatch(getProducts());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  const { product } = store.getState();
  const { bestProducts, products } = product;
  return {
    props: {
      title,
      description,
      bestProducts,
      products,
    },
  };
});

export default Home;
