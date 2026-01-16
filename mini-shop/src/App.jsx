
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar cartCount={cart.length} setPage={setPage} />

      {page === "home" && <Home addToCart={addToCart} />}
      {page === "cart" && (
        <CartPage cart={cart} removeFromCart={removeFromCart} />
      )}
    </>
  );
}

export default App;
