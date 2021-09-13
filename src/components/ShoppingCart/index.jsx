import React, { useState, useEffect } from "react";
import axios from "axios";

///////Style/////////
import { Container, Ul, Button, Content, TitlePrice, BoxUl, BoxCart } from "./styles";

export default function ShoppingCart(props) {
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
        .then((res) => {})
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
        <BoxUl>
          <Ul>
            <h4>Lista de Compras</h4>
            {Object.keys(props.cart).length === 0 && <span>Vazio 🙂</span>}
            {filteredList.map((item) => (
              <li>
                <p>{item.name}:</p>
                <TitlePrice>{item.price}</TitlePrice>

                <Button onClick={() => addItem(item)}>+</Button>
                <span>{props.cart[item.id] ? props.cart[item.id] : 0}</span>
                <Button onClick={() => subItem(item)}>-</Button>
              </li>
            ))}
          </Ul>
        </BoxUl>

        <BoxCart>
          <h4>Carrinho</h4>
          <p>
            <strong>Total: R$</strong>
          </p>

          <Button disabled={filteredList.length === 0} onClick={buyProducts}>
            Comprar
          </Button>
        </BoxCart>
      </Content>
      <p>
        Agradecemos a preferência! <span role="img">🎉</span>
      </p>
    </Container>
  );
}
