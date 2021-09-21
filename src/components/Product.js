import { Button } from "semantic-ui-react";
import Image from "next/image";
import styles from "../styles/Product.module.css";

function Product(props) {
  const { product } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <Image
            src={product.image_link}
            alt={product.name}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.info_wrapper}>
          <strong className={styles.name}>{product.name}</strong>
          <strong className={styles.price}>{product.price}</strong>
          <span className={styles.info}>
            {product.category ? `${product.category}/` : ""}
            {product.product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <h3>Description</h3>
      <p className={styles.description}>{product.description}</p>
    </>
  );
}

export default Product;
