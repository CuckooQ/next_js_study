import wrapper from "../redux/store";
import ProductListContainer from "../containers/ProductListContainer";

function Home({ title, description }) {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="decsription" content={description} />
      </head>
      <ProductListContainer />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((_store) => async (_) => {
  const title = "HOME | CuckooQ";
  const description = "CuckooQ Home";
  return {
    props: {
      title,
      description,
    },
  };
});

export default Home;
