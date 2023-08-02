import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { kenzieBurguerApi } from "../../services/api";

export const HomePage = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect de montagem:

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await kenzieBurguerApi.get("products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // useEffect montagem - carrega os produtos da API e joga em productList
  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // adição, exclusão, e exclusão geral do carrinho
  // renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca
  // estilizar tudo com sass de forma responsiva

  return (
    <>
      <Header setIsVisible={setIsVisible} />
      <main>
        <ProductList productList={productList} />
        {isVisible ? (
          <CartModal cartList={cartList} setIsVisible={setIsVisible} />
        ) : null}
      </main>
    </>
  );
};
