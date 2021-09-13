import React from "react";
import NavBar from "../../components/NavBar";
import ListProduct from "../../components/ListProduct";
import ModalScreen from "../../components/Modal";
import ProductCard from "../../components/ProductCard";
import SendBar from "../../components/SendBar";

///style////////////////////////////////
import { Container, Root, Box, BoxSendBar } from "./style";

export default function Home() {
  return (
    <Root>
      <Container>
        {/* <NavBar /> */}
        <Box>
          <BoxSendBar>
            <SendBar />
          </BoxSendBar>
          <div>
            <ProductCard />
          </div>
        </Box>
      </Container>
    </Root>
  );
}
