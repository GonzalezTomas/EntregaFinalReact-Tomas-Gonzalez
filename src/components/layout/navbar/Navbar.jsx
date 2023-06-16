import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="columns">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <button className="color-botones-productos">
            Todos Los productos
          </button>{" "}
        </Link>
        <Link to="/category/Bombones">
          <button className="color-botones-productos">Bombones</button>
        </Link>
        <Link to="/category/Chocolates">
          <button className="color-botones-productos">Chocolates</button>
        </Link>
        <CartWidget />
      </div>
    </>
  );
};
