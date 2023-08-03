import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

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
    <header>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={() => setIsVisible(true)}>
          <MdShoppingCart size={21} />
          <span>{cartList.length}</span>
        </button>
        <form onSubmit={submitSearchProduct}>
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
