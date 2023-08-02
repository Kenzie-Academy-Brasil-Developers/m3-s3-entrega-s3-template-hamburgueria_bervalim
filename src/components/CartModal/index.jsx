import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { toast } from "react-toastify";

export const CartModal = ({
  cartList,
  setIsVisible,
  removeProductFromCart,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div role="dialog">
      <div>
        <h2>Carrinho de compras</h2>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="close"
          title="Fechar"
        >
          <MdClose size={21} />
        </button>
      </div>
      <div>
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
            <div>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </div>
          )}
        </ul>
      </div>
      <div>
        <div>
          {cartList.length > 0 ? (
            <>
              <span>Total</span>
              <span>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </>
          ) : null}
        </div>
        <button>Remover todos</button>
      </div>
    </div>
  );
};
