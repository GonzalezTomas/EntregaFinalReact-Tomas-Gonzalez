import { ProductsList } from "./components/pages/itemListContainer/ProductsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import Layout from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsList />} />
          <Route path="/category/:categoryName" element={<ProductsList />} />
          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>Lo siento esta pagina no existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
