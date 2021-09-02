import React, { useState } from "react";
import "./styles.css";

const getData = () => {
  let data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      id: i,
      description: `producto-${i}`,
      precio: i * 2,
    });
  }

  return data;
};

export default function ShoppingCart() {
  const [products, setProducts] = useState(getData);
  const [cart, setCart] = useState([]);
  const [compraRealizada, setCompraRealizada] = useState(false);



  const add = (product) => {
    const productosList = products.filter((item) => item.id !== product.id);
    setProducts(productosList);
    setCart([...cart, product]);
  };

  const delet = (product) => {
    const productosList = cart.filter((item) => item.id !== product.id);
    setProducts([...products, product]);
    setCart(productosList);
  };

  const purchase = () => {
    setProducts(getData());
    setCart([]);
    setCompraRealizada(true);
  };

  const getAll = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.precio;
    });
    return total;
  };

  return (
    <div className="App">
      <div className="product-list">
        <h4>Lista de Compras</h4>
        <ul>
          {products.length === 0 && <span>Vazio 🙂</span>}
          {products.map((item) => (
            <li>
              <span>{item.description}</span>
              <button onClick={() => add(item)}>+</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h4>Carrinho</h4>
        <ul>
          {!compraRealizada && cart.length === 0 && <span>Vazio 😑</span>}
          {cart.map((item) => (
            <li>
              <span>{item.description}</span>
              <button className="delete" onClick={() => delet(item)}>
                -
              </button>
            </li>
          ))}

          {compraRealizada && (
            <p>
              Agradecemos a preferência! <span role="img">🎉</span>
            </p>
          )}
        </ul>
        <div className="detalle">
          {!compraRealizada && (
            <p>
              <strong>Total: $</strong>
              {getAll()}
            </p>
          )}
          {!compraRealizada && (
            <button
              className={cart.length === 0 ? "disabled" : null}
              disabled={cart.length === 0}
              onClick={purchase}
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
