export const ProductCard = ({ product, addProductToCart }) => {
  return (
    <li>
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
        <button onClick={() => addProductToCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};
