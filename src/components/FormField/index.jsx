import React, { useState } from "react";
import ModalScreen from "../Modal";

export default function FormField() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  console.log(name);
  console.log(search);
  console.log(date);

  const hendlerName = (event) => {
    setName(event.target.value);
  };

  const hendlerSearch = (event) => {
    setSearch(event.target.value);
  };

  const hendlerDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          type="text"
          placeholder="Nome"
          onChange={hendlerName}
        />

        <label htmlFor="">Data da Entrega</label>
        <input type="date" onChange={hendlerDate} value={date} />
      </div>

      <button type="submit"  >Buscar</button>
      <input
        type="text"
        placeholder="Bucar Produto"
        onChange={hendlerSearch}
        value={search}
      />

      <ModalScreen />
    </div>
  );
}
