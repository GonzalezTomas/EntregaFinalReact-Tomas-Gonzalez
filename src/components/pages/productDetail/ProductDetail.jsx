import "./ProductDetail.css";
import ItemCount from "../../ItemCount";

const ProductDetail = ({ productSelected }) => {
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
        <ItemCount />
      </div>
    </>
  );
};

export default ProductDetail;
