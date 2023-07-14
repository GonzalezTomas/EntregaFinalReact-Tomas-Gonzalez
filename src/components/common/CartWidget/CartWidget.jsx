import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <>
      <Link to="/carrito">
        <Badge badgeContent={totalItems} showZero color="primary">
          <FiShoppingCart size="30px" />
        </Badge>
      </Link>
    </>
  );
};
