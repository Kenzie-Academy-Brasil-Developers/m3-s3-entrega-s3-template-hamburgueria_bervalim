import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({
  setIsVisible,
  cartList,
  setsearchProducts,
  clearFilter,
}) => {
  // Estado para capturar o que o usuário digita
  const [value, setValue] = useState("");

  const submitSearchProduct = (event) => {
    event.preventDefault();
    setsearchProducts(value);
    setValue("");
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <div className={styles.position}>
            <button onClick={() => setIsVisible(true)}>
              <MdShoppingCart size={21} />
              <span className={styles.cartLength}>{cartList.length}</span>
            </button>
            <form onSubmit={submitSearchProduct} className={styles.input}>
              <input
                type="text"
                value={value}
                placeholder="Digitar pesquisa"
                onChange={(event) => setValue(event.target.value)}
              />
              <button type="submit" className={styles.search}>
                <MdSearch size={21} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
