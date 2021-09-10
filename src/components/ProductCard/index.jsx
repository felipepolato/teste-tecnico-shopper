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
} from "./styles";

export default function ProductCard() {
  const [primaryList, setPrimaryList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    console.log("RESPONSE");
    axios
      .get("http://localhost:3003/products/")
      .then((response) => {
        setList(response.data)
      })
      .catch((error) => {
        console.error(error.massege);
      });
  };

  const add = (product) => {
    const productosList = list.filter((item) => item.id !== product.id);
    setList(productosList);
    setPrimaryList([...primaryList, product]);
  };

  // const delet = (product) => {
  //   const productosList = primaryList.filter((item) => item.id !== product.id);
  //   setPrimaryList([...list, product]);
  //   setPrimaryList(productosList);
  // };

  return (
    <Container>
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
                <p> Quantidade {item.qty_stock}</p>
              </span>

              <button onClick={() => add(item)}>+</button>
            </Content>
          );
        })}
    </Container>
  );
}
