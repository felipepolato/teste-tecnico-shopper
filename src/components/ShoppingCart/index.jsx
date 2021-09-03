import React, { useState } from "react";
// import "./styles.css";

///////Style/////////
import { Container, Ul, Button, Content } from "./styles";

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

  console.log(products);

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
    <Container>
      <Content>
        <h4>Lista de Compras</h4>
        <Ul>
          {products.length === 0 && <span>Vazio 🙂</span>}
          {products.map((item) => (
            <li>
              <span>{item.description}</span>
              <button onClick={() => add(item)}>+</button>
            </li>
          ))}
        </Ul>

        <h4>Carrinho</h4>
        <Ul>
          {!compraRealizada && cart.length === 0 && <span>Vazio 😑</span>}
          {cart.map((item) => (
            <li>
              <span>{item.description}</span>
              <Button className="delete" onClick={() => delet(item)}>
                -
              </Button>
            </li>
          ))}

          {compraRealizada && (
            <p>
              Agradecemos a preferência! <span role="img">🎉</span>
            </p>
          )}
        </Ul>
        <div className="detalle">
          {!compraRealizada && (
            <p>
              <strong>Total: $</strong>
              {getAll()}
            </p>
          )}
          {!compraRealizada && (
            <Button
              // className={cart.length === 0 ? "disabled" : null}
              disabled={cart.length === 0}
              onClick={purchase}
            >
              Comprar
            </Button>
          )}
        </div>
      </Content>
    </Container>
  );
}
