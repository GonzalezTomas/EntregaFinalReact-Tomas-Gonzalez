import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import fondo from "../../../img/fondo-1.jpg";
import correctoLogo from "../../../img/nenefeliz.png";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };
      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este Campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El telefono no cumple los requisitos"),
    }),
  });

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        {orderId ? (
          <div>
            <h1
              style={{ color: "white", fontSize: "24px", marginBottom: "20px" }}
            >
              Su compra fue exitosa!
            </h1>
            <img
              src={correctoLogo}
              alt="Correcto"
              style={{ width: "300px", height: "300px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              >
                El número de comprobante es:
              </h3>
              <h3
                style={{
                  color: "orange",
                  fontSize: "18px",
                  marginLeft: "10px",
                }}
              >
                {orderId}
              </h3>
            </div>
          </div>
        ) : (
          <Checkout
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutContainer;
