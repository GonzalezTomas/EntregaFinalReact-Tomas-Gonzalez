import { useContext } from "react";
import "./CartContainer.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import fondo from "../../../img/fondo-1.jpg";

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
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "rgb(165, 108, 108)",
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              width: "500px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={product.img}
              alt=""
              style={{ width: "300px", height: "200px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h2 style={{ color: "white" }}>{product.title}</h2>
              <h3 style={{ color: "green" }}>$ {product.price}</h3>
              <h3 style={{ color: "white" }}>
                Cantidad:{" "}
                <span style={{ color: "black" }}>{product.quantity}</span>
              </h3>
              <Button
                variant="contained"
                onClick={() => removeById(product.id)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div
          style={{
            backgroundColor: "rgba(36, 25, 2, 0.993)",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h2 style={{ color: "white" }}>
            El total del carrito es: <span style={{ color: "green" }}>$</span>{" "}
            <span style={{ color: "green" }}>{total}</span>
          </h2>
          <Button
            onClick={limpiar}
            variant="contained"
            style={{ marginRight: "10px" }}
          >
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="contained">Finalizar Compra</Button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "white" }}>
            El total del carrito es: <span style={{ color: "green" }}>$ 0</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
