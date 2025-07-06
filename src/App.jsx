import { Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";

// page components
import Home     from "./Pages/Home";
import Products from "./Pages/Products";
import Cart     from "./Pages/Cart";


const App = () => (
  <>
    <MyNavbar />
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart"     element={<Cart />} />
    </Routes>
  </>
);

export default App;
