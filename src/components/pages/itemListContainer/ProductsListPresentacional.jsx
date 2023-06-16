import ProductCard from "../../common/productCard/ProductCard";

const ProductsListPresentacional = ({ items }) => {
  return (
    <>
      <div className="Card-Container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </>
  );
};

export default ProductsListPresentacional;
