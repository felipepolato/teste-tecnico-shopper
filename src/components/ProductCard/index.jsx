import React, { useState, useEffect } from "react";
import axios from "axios";

import Img from "../../img/felipe.jpg";

//////style///////////
import {
  Container,
  Content,
  ImgCard,
  TitleProduct,
  PriceProduct,
  BoxButton,
} from "./styles";
import NavBar from "../NavBar";

export default function ProductCard(props) {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");

  console.log(list)

  const handlerSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchedItems = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getProducts();
  }, []);

  // GET
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

  const addItem = (product) => {
    setCart((oldCart) => {
      return {
        ...oldCart,
        [product.id]: oldCart[product.id] ? oldCart[product.id] + 1 : 1,
      };
    });
  };

  const subItem = (product) => {
    setCart((oldCart) => {
      return {
        ...oldCart,
        [product.id]: oldCart[product.id] ? oldCart[product.id] - 1 : 0,
      };
    });
  };

  return (
    <Container>
      <BoxButton>
        <label>Buscar Produto</label>
        <input
          type="text"
          placeholder="Digite Aqui!"
          onChange={handlerSearch}
          value={search}
        />
      </BoxButton>

      <NavBar cart={cart} setCart={setCart} />
      {list &&
        searchedItems.map((item) => {
          return (
            <Content>
              <ImgCard>
                <img src={item.image} />
              </ImgCard>

              <span>
                <TitleProduct>{item.name}</TitleProduct>
                <PriceProduct>Preço R${item.price}</PriceProduct>
              </span>

              <BoxButton>
                <button onClick={() => subItem(item)}>-</button>
                <span>{cart[item.id] ? cart[item.id] : 0}</span>
                <button onClick={() => addItem(item)}>+</button>
              </BoxButton>
            </Content>
          );
        })}
    </Container>
  );
}
