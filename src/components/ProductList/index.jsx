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
        <div className="container">
          <p className="paragraph priceCard total">
            Resultados de busca para: {searchProducts}
          </p>
          {productsListExibition.length > 0 ? (
            <h3 className="title two green">
              {productsListExibition.length} produto(s) foram encontrados
            </h3>
          ) : (
            <h1 className="title one">Nenhum produto foi encontrado</h1>
          )}
          <button className="cardButton grey card" onClick={clearFilter}>
            Limpar Filtro
          </button>
        </div>
      ) : null}
      <div className="container">
        <ul>
          {productsListExibition.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
