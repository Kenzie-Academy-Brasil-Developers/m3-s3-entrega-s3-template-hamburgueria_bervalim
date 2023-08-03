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
          <h3>Resultados de busca para: {searchProducts}</h3>
          {productsListExibition.length > 0 ? (
            <p>{productsListExibition.length} produto(s) foram encontrados</p>
          ) : (
            <h2>Nenhum produto foi encontrado</h2>
          )}
          <button onClick={clearFilter}>Limpar Filtro</button>
        </>
      ) : null}

      <ul>
        {productsListExibition.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </ul>
    </>
  );
};
