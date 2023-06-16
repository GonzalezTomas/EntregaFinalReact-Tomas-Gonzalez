import { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ProductsList = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      });
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return (
    <>
      <ProductsListPresentacional items={items} />
    </>
  );
};
