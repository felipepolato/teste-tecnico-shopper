import React, { useState } from "react";

export default function ProductCard() {
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

  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <div>
              <div>
                <img src={item.id} />
                <span>{item.name}</span>

                <button>-</button>
                <button>+</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
