import React, { useState, useEffect } from "react";
import axios from "axios";

///////Style/////////
import {
  Container,
  Ul,
  Button,
  Content,
  TitlePrice,
  BoxUl,
  BoxCart,
  FormField,
  TitlePreference,
} from "./styles";

export default function ShoppingCart(props) {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handlerName = (event) => {
    setName(event.target.value);
  };

  const handlerDate = (event) => {
    setDate(event.target.value);
  };

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
        console.error(error.message);
      });
  };

  const buyProducts = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const shopList = Object.entries(props.cart).map((item) => {
      return {
        id: item[0],
        qty: item[1],
      };
    });

    const bodyCart = {
      name: name,
      date: date,
      list: shopList,
    };

    axios
      .post("http://localhost:3003/cart/", bodyCart)
      .then((res) => {
        Object.entries(props.cart).map((item) => {
          const body = {
            id: item[0],
            qty: item[1],
          };

          axios
            .put("http://localhost:3003/products/", body)
            .then((res) => {})
            .catch((error) => {
              const mensagem = error.response.data.message;
              console.log(mensagem);
              alert(mensagem);
            });
        });
        props.setCart({});
      })
      .catch((error) => {
        console.error(error.message);
      });
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

  const total = filteredList.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);

  return (
    <Container>
      <FormField onSubmit={buyProducts}>
        <label>Nome</label>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="Nome"
          onChange={handlerName}
          required
        />

        <label htmlFor="">Data da Entrega</label>
        <input
          name="date"
          type="date"
          onChange={handlerDate}
          value={date}
          required
        />

        <Content>
          <BoxUl>
            <Ul>
              <h4>Lista de Compras</h4>
              {Object.keys(props.cart).length === 0 && <span>Vazio 🙂</span>}
              {filteredList.map((item) => (
                <li>
                  <p>{item.name}:</p>
                  <TitlePrice>{item.price}</TitlePrice>

                  <Button onClick={() => subItem(item)}>-</Button>

                  <span>{props.cart[item.id] ? props.cart[item.id] : 0}</span>

                  <Button onClick={() => addItem(item)}>+</Button>
                </li>
              ))}
              <BoxCart>
                <h4>Carrinho</h4>
                <TitlePrice>
                  <strong>Total: R$ {Math.round(total * 100) / 100}</strong>
                </TitlePrice>

                <Button disabled={filteredList.length === 0} type="submit">
                  Comprar
                </Button>
              </BoxCart>
            </Ul>
          </BoxUl>
        </Content>
      </FormField>

      <TitlePreference>
        Agradecemos a preferência! <span role="img">🎉</span>
      </TitlePreference>
    </Container>
  );
}
