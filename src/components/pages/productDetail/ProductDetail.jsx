import "./ProductDetail.css";
import ItemCount from "../../ItemCount";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  

  return (
    <>
      {productSelected && (
        <div className="productos-center">
          <img
            style={{ width: "500px", height: "auto" }}
            src={productSelected.img}
            alt=""
          />
        </div>
      )}
      <h1 className="centrar-descripcion"> {productSelected.title} </h1>
      <h2 className="centrar-descripcion"> {productSelected.description} </h2>
      <div className="centrar-descripcion">
        {productSelected.stock > 0 ? (
          <ItemCount
            stock={productSelected.stock}
            initial={cantidad}
            onAdd={onAdd}
          />
        ) : (
          <h3>No Hay Stock</h3>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
