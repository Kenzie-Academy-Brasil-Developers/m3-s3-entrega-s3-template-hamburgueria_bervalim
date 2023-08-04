import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { toast } from "react-toastify";
import styles from "./style.module.scss";

export const CartModal = ({
  cartList,
  setIsVisible,
  removeProductFromCart,
  setCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.overlay} role="dialog">
      <div className={styles.modalBox}>
        <div>
          <div className={styles.purchaseCart}>
            <h2 className="title three white">Carrinho de compras</h2>
          </div>
          <button
            className={styles.modalClose}
            onClick={() => setIsVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.modalList}>
          <ul>
            {cartList.length > 0 ? (
              cartList.map((product) => (
                <CartItemCard
                  removeProductFromCart={removeProductFromCart}
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className={styles.emptyCard}>
                <h2 className="title one">Sua sacola está vazia</h2>
                <p className="paragraph priceCard total">Adicione itens</p>
              </div>
            )}
          </ul>
        </div>
        <div className={styles.removeButtonDivModal}>
          {cartList.length > 0 ? (
            <>
              <div className={styles.cardTotal}>
                <span className="paragraph priceCard total">Total</span>
                <span className="paragraph priceCard priceModal">
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className={styles.removeButton}>
                <button
                  className="cardButton modal"
                  onClick={() => {
                    setCartList([]);
                    toast.warn("Todos os itens foram removidos do carrinho");
                  }}
                >
                  Remover todos
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
