import React from "react";
import ModalScreen from "../Modal";

//////Style/////////
import { Container} from "./style";

export default function NavBar(props) {
  return (
    <Container>
      <ModalScreen cart={props.cart} setCart={props.setCart}/>
    </Container>
  );
}
