import { useContext } from "react";
import "./CartContainer.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar todo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Limpiar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito Limpio!", "Su carrito quedo vacio.", "success");
      }
    });
  };

  return (
    <div>
      <h2>El total del carrito es: $ {total}</h2>
      {cart.length > 0 && (
        <Button onClick={limpiar} variant="contained">
          Limpiar Carrito
        </Button>
      )}
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <Button variant="contained" onClick={() => removeById(product.id)}>
              Eliminar
            </Button>
            <Link to="/checkout">
              <Button variant="contained">Finalizar Compra</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
