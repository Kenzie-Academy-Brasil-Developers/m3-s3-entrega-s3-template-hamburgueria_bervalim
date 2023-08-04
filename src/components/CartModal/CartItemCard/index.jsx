import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProductFromCart }) => {
  return (
    <li className={styles.cardItem}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <img src={product.img} alt={product.name} />
        </div>
        <h3 className="title three">{product.name}</h3>
      </div>
      <div className={styles.cardButton}>
        <button
          onClick={() => removeProductFromCart(product.id)}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};
