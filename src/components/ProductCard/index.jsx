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

export default function ProductCard() {
  const [primaryList, setPrimaryList] = useState([]);
  const [list, setList] = useState([]);
  const [newProduct, setNewProduct] = useState({});
  const [cart, setCart] = useState({});

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

  // PUT
  const putProducts = () => {
    // const body = {
    //   id,
    //   qty,
    // };

    axios
      .put("http://localhost:3003/products/")
      .then((response) => {
        setNewProduct(response.data);
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
      <NavBar cart={cart} setCart={setCart}/>
      {list &&
        list.map((item) => {
          return (
            <Content>
              <ImgCard>
                <img src={Img} />
              </ImgCard>

              <span>
                <TitleProduct>{item.name}</TitleProduct>
                <PriceProduct>Preço R${item.price}</PriceProduct>
              </span>

              <BoxButton>
                <button onClick={() => subItem(item)}>-</button>
                <span>
                  {cart[item.id] ? cart[item.id] : 0}
                </span>
                <button onClick={() => addItem(item)}>+</button>
              </BoxButton>
            </Content>
          );
        })}
    </Container>
  );
}
