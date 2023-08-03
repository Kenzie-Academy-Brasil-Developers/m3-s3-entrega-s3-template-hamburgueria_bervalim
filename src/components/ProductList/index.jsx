import { ProductCard } from "./ProductCard";

export const ProductList = ({
  productList,
  addProductToCart,
  productsListExibition,
}) => {
  return (
    <ul>
      {productsListExibition.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </ul>
  );
};
