import React, { useState } from "react";

import Img from "../../img/felipe.jpg";

//////style///////////
import { Container, Content } from "./styles";

export default function ProductCard() {
  const [primaryList, setPrimaryList] = useState([]);
  const [list, setList] = useState([
    {
      id: 1,
      name: "AZEITE",
      price: 20.49,
      qty_stock: 158,
    },

    {
      id: 2,
      name: "Shampoo",
      price: 10.0,
      qty_stock: 58,
    },
  ]);

  const add = (product) => {
    const productosList = list.filter((item) => item.id !== product.id);
    setList(productosList);
    setPrimaryList([...primaryList, product]);
  };

  const delet = (product) => {
    const productosList = primaryList.filter((item) => item.id !== product.id);
    setPrimaryList([...list, product]);
    setPrimaryList(productosList);
  };

  return (
    <Container>
      {list &&
        list.map((item) => {
          return (
            <Content>
                <img src={Img} />
              <div>
                <span>{item.name}</span>
                <div>
                  <button className="delete" onClick={() => delet(item)}>
                    -
                  </button>
                    {item.qty_stock}
                  <button onClick={() => add(item)}>+</button>
                </div>
              </div>
            </Content>
          );
        })}
    </Container>
  );
}
