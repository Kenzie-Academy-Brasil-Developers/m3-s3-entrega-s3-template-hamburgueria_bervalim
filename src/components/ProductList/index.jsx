import { ProductCard } from "./ProductCard";

export const ProductList = ({
  productList,
  addProductToCart,
  productsListExibition,
}) => {
  return (
    <>
      {productsListExibition.length > 0 ? (
        <ul>
          {productsListExibition.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
    </>
  );
};
