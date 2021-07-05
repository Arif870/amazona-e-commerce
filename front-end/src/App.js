import React from "react";
import Product from "./components/Product";
import data from "./data";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div className="brand">
          <a href={"/"}>dhokan</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">
        <div>All rights reserved @arif2021</div>
      </footer>
    </div>
  );
}

export default App;
