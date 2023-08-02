import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = () => {
  const [value, setValue] = useState("");

  return (
    <header>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button>
          <MdShoppingCart size={21} />
          <span>0</span>
        </button>
        <form>
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
