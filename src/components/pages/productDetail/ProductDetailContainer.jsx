import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente!",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
          onAdd={onAdd}
        />
      ) : (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {" "}
          <RingLoader color="rgb(165, 108, 108)" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailContainer;
