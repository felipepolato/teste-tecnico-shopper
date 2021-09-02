import React, { useState } from "react";

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
    <div>
      {list &&
        list.map((item) => {
          return (
            <div>
              <div>
                <img src={item.id} />
                <span>{item.name}</span>

                <button className="delete" onClick={() => delet(item)}>-</button>
                <button onClick={() => add(item)}>+</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
