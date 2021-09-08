import React from "react";
import NavBar from "../../components/NavBar";
import ListProduct from "../../components/ListProduct";
import ModalScreen from "../../components/Modal";
import ProductCard from "../../components/ProductCard";
import SandBar from "../../components/SendBar";

///style////////////////////////////////
import { Container, Root, Box, BoxSandBar } from "./style";

export default function Home() {
  return (
    <Root>
      <Container>
        <NavBar />
        <Box>
          <BoxSandBar>
            <SandBar />
          </BoxSandBar>
          <div>
            <ProductCard />
          </div>
        </Box>
      </Container>
    </Root>
  );
}
