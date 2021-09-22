import wrapper from "../../redux/store";
import ProductContainer from "../../containers/ProductContainer";
import { END } from "redux-saga";
import { getProduct } from "../../redux/modules/product";

function ProductView({ product }) {
  return (
    <>
      <head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </head>
      <ProductContainer />;
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { id } = params;
      store.dispatch(getProduct(id));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      const { product } = store.getState();
      const { selectedProduct } = product;
      return {
        props: {
          product: selectedProduct,
        },
      };
    }
);

export default ProductView;
