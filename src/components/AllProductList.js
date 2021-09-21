import { Divider, Grid, GridColumn, GridRow } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";
import { VIEW_URL } from "../constants/view";
import styles from "../styles/ProductList.module.css";

function AllProductList(props) {
  const { products } = props;
  return (
    <>
      <h3 className={styles.header}>모든 상품</h3>
      <Divider />
      <Grid columns={3}>
        <GridRow>
          {products.map((product) => {
            return (
              <GridColumn key={product.id}>
                <Link href={`${VIEW_URL}/${product.id}`} passHref={true}>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                      <Image
                        src={product.image_link}
                        alt={product.name}
                        width="100%"
                        height="100%"
                        className={styles.img}
                      />
                    </div>
                    <strong className={styles.name}>{product.name}</strong>
                    <span className={styles.info}>
                      {product.category} {product.product_type}
                    </span>
                    <strong className={styles.price}>{product.price}</strong>
                  </div>
                </Link>
              </GridColumn>
            );
          })}
        </GridRow>
      </Grid>
    </>
  );
}

export default AllProductList;
