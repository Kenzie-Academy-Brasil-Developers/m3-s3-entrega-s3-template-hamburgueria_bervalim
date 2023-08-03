import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProductFromCart }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
        <h3 className="title three">{product.name}</h3>
      </div>
      <button
        onClick={() => removeProductFromCart(product.id)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
