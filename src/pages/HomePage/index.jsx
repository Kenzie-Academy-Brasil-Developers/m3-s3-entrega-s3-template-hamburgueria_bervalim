import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { kenzieBurguerApi } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

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

  const addProductToCart = (addingcartProduct) => {
    if (
      !cartList.some((cartProduct) => cartProduct.id === addingcartProduct.id)
    ) {
      setCartList([...cartList, addingcartProduct]);
      toast.success("Item adicionado ao carrinho com sucesso");
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  const removeProductFromCart = (cartProductId) => {
    const newCartList = cartList.filter(
      (cartProduct) => cartProduct.id !== cartProductId
    );
    setCartList(newCartList);

    toast.warn("Item removido com sucesso");
  };

  return (
    <>
      <Header setIsVisible={setIsVisible} />
      <main>
        <ProductList
          productList={productList}
          addProductToCart={addProductToCart}
        />
        {isVisible ? (
          <CartModal
            removeProductFromCart={removeProductFromCart}
            cartList={cartList}
            setIsVisible={setIsVisible}
            setCartList={setCartList}
          />
        ) : null}
      </main>
    </>
  );
};
