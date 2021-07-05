import React from "react";
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
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt="product" />
              </a>
              <a href={`/product/${product._id}`}>
                <div className="card-body">
                  <h2>{product.name}</h2>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">
                    <p>${product.price}</p>
                  </div>
                </div>
              </a>
            </div>
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
