import Link from "./Link";
import { useState } from "react";
// import logo from "../images/Logo.svg";
import logo from "../images/Logo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
            {hideMenu ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </button>
          <Link url="/">
            <img src={logo} alt="logo du site" className="image" />
          </Link>
        </div>
        <ul className="menu" id={hideMenu ? "menu-hidden" : "menu-visible"}>
          <li>
            <Link url="/" activeClassName="active">
              Accueil
            </Link>
          </li>
          <li>
            <Link url="/movies" activeClassName="active">
              Films
            </Link>
          </li>
          <li>
            <Link url="/series" activeClassName="active">
              Séries
            </Link>
          </li>
          <li>
            <Link url="/celebrities" activeClassName="active">
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
