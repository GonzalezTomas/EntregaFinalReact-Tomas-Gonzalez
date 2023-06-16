import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <>
      <Link to="/carrito">
        <Badge badgeContent={1} color="primary">
          <FiShoppingCart className="posicion" size="30px" />
        </Badge>
      </Link>
    </>
  );
};
