import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addProductToCart }) => {
  return (
    <ul>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </ul>
  );
};
