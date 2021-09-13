import React, { useState } from "react";
import ModalScreen from "../Modal";

//////Style/////////
import { Container, Content } from "./style";

export default function NavBar(props) {
  return (
    <Container>
      <ModalScreen cart={props.cart} setCart={props.setCart}/>
    </Container>
  );
}
