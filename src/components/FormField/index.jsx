import React, { useState } from "react";
import ModalScreen from "../Modal";

//////Style/////////
import { Container } from "./style";

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
    <Container>
      <input
        value={name}
        type="text"
        placeholder="Nome"
        onChange={hendlerName}
      />

      <label htmlFor="">
        Data da Entrega
        <input type="date" onChange={hendlerDate} value={date} />
      </label>

      <button type="submit">Buscar</button>
      <input
        type="text"
        placeholder="Bucar Produto"
        onChange={hendlerSearch}
        value={search}
      />
      <ModalScreen />
    </Container>
  );
}
