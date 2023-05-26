import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import "./CartWidget.css";

export const CartWidget = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <>
      <div className="columna-carrito">
        <FiShoppingCart className="posicion" size="30px" />
        <h2>{contador}</h2>
      </div>
      <button className="color-boton-carrito" onClick={sumar}>Agregar al carrito</button>
    </>
  );
};
