import React, { useState, useEffect } from "react";
import axios from "axios";

// import "./styles.css";

///////Style/////////
import { Container, Ul, Button, Content } from "./styles";

export default function ShoppingCart(props) {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const addItem = (product) => {
    props.setCart((oldCart) => {
      return {
        ...oldCart,
        [product.id]: oldCart[product.id] ? oldCart[product.id] + 1 : 1,
      };
    });
  };

  const subItem = (product) => {
    props.setCart((oldCart) => {
      return {
        ...oldCart,
        [product.id]: oldCart[product.id] ? oldCart[product.id] - 1 : 0,
      };
    });
  };

  const getProducts = () => {
    axios
      .get("http://localhost:3003/products/")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error.massege);
      });
  };

  const buyProducts = () => {
    Object.entries(props.cart).map((item) => {
      const body = {
        id: item[0],
        qty: item[1],
      };

      axios
        .put("http://localhost:3003/products/", body)
        .then((res) => {
        })
        .catch((error) => {
          console.error(error.massege);
        });
      });
      props.setCart({});
  };

  const filteredList = list.filter((item) => {
    return Object.keys(props.cart).some((id) => {
      if (!props.cart[id]) {
        return false;
      }

      return Number(item.id) === Number(id);
    });
  });

  console.log("AQUIIII", filteredList);

  return (
    <Container>
      <Content>
        <h4>Lista de Compras</h4>

        <Ul>
          {Object.keys(props.cart).length === 0 && <span>Vazio 🙂</span>}
          {filteredList.map((item) => (
            <li>
              <span>{item.name}</span>
              <button onClick={() => addItem(item)}>+</button>
            </li>
          ))}
        </Ul>

        <h4>Carrinho</h4>

        <Ul>
          {filteredList.length === 0 && <span>Vazio 😑</span>}

          {filteredList.map((item) => (
            <li>
              <span>{item.name}</span>
              <Button className="delete" onClick={() => subItem(item)}>
                -
              </Button>
            </li>
          ))}

          <p>
            Agradecemos a preferência! <span role="img">🎉</span>
          </p>
        </Ul>
        <div className="detalle">
          <p>
            <strong>Total: $</strong>
          </p>

          <Button disabled={filteredList.length === 0} onClick={buyProducts}>
            Comprar
          </Button>
        </div>
      </Content>
    </Container>
  );
}
