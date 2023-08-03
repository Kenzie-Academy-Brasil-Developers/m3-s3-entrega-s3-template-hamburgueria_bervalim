import styles from "./style.module.scss";

export const ProductCard = ({ product, addProductToCart }) => {
  return (
    <li tabIndex={0} className={styles.productCard}>
      <img src={product.img} alt={product.name} />
      <div>
        <h3 className="title three">{product.name}</h3>
        <span className="paragraph category">{product.category}</span>
        <span className="paragraph priceCard">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          // className="cardButton grey card"
          onClick={() => addProductToCart(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
