import React, { useState } from "react";

//////Style/////////
import { Container, Content, FormField, BoxBottum } from "./styles";
export default function SandBar() {
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
      <FormField>
        <label>Nome</label>
        <input
          value={name}
          type="text"
          placeholder="Nome"
          onChange={hendlerName}
        />

        <label htmlFor="">Data da Entrega</label>
        <input type="date" onChange={hendlerDate} value={date} />
      </FormField>

      <BoxBottum>
        <input
          type="text"
          placeholder="Bucar Produto"
          onChange={hendlerSearch}
          value={search}
        />

        <button type="submit">Buscar</button>
      </BoxBottum>
    </Container>
  );
}
