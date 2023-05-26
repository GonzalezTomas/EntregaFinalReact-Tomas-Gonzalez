import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/itemListContainer/ProductsList";
import { useState } from "react";

const App = () => {
  const [isdark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const cambiarColor = () => {
    setIsActive(!isActive);
  };

  const cambiarModo = () => {
    setIsDark(!isdark);
  };

  console.log(isdark);

  return (
    <div className="fondo">
      <Navbar />
      <ProductsList />
      <button
        className={`color-boton-oscuro-claro ${
          isActive ? "color-activo" : "color-original"
        }`}
        onClick={() => {
          cambiarColor();
          cambiarModo();
        }}
      >
        Cambiar a {isdark ? "claro" : "oscuro"}
      </button>
    </div>
  );
};

export default App;
