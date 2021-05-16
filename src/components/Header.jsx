import Link from "./Link";
import { useState } from "react";
import logo from "../images/Logo.svg";
import hamburger from "../images/icons/hamburger.svg";
import closemenu from "../images/icons/chrome-close.svg";

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <div className="header">
      <div className="header__left-side">
        <div className="logo">
          <button
            onClick={() => {
              setHideMenu(!hideMenu);
            }}
          >
            <img src={hideMenu ? hamburger : closemenu} alt=""></img>
          </button>
          <img src={logo} alt="logo du site" className="image" />
        </div>
        <ul className="menu" id={hideMenu ? "menu-hidden" : "menu-visible"}>
          <li>
            <Link url="/" activeClassName="active">
              Accueil
            </Link>
          </li>
          <li>
            <Link url="/films" activeClassName="active">
              Films
            </Link>
          </li>
          <li>
            <Link url="/séries" activeClassName="active">
              Séries
            </Link>
          </li>
          <li>
            <Link url="/celebrités" activeClassName="active">
              Célébrités
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__right-side">
        <input type="text" placeholder="Tapez un mot" />
        <button>Rechercher</button>
      </div>
    </div>
  );
};

export default Header;
