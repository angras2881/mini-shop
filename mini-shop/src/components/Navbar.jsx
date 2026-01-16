function Navbar({ cartCount, setPage }) {
  return (
    <nav className="navbar">
      <h2 onClick={() => setPage("home")}>MiniShop</h2>
      <button onClick={() => setPage("cart")}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
