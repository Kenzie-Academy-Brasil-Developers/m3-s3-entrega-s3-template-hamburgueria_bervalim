import { ProductCard } from "./ProductCard";

export const ProductList = ({
  productList,
  addProductToCart,
  productsListExibition,
  searchProducts,
  clearFilter,
}) => {
  return (
    <>
      {searchProducts ? (
        <>
          <h3>Resultados de busca para:{searchProducts}</h3>
          <p>{productsListExibition.length} produto(s) foram encontrados</p>
          <button onClick={clearFilter}>Limpar Filtro</button>
        </>
      ) : null}
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
        <h2>Nenhum produto encontrado</h2>
      )}
    </>
  );
};
