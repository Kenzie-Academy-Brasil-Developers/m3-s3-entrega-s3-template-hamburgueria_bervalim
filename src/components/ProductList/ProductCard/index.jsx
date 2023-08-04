import styles from "./style.module.scss";

export const ProductCard = ({ product, addProductToCart }) => {
  return (
    <li tabIndex={0} className={styles.productCard}>
      <img src={product.img} alt={product.name} />

      <div className={styles.information}>
        <h3 className="title three">{product.name}</h3>
        <p className="paragraph category">{product.category}</p>
        <div>
          <span className="paragraph priceCard">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button onClick={() => addProductToCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};
