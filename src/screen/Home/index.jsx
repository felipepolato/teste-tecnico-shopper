import React from "react";
import ProductCard from "../../components/ProductCard";

///style////////////////////////////////
import { Container, Root, Box } from "./style";

export default function Home() {
  return (
    <Root>
      <Container>
        <Box>
          <ProductCard />
        </Box>
      </Container>
    </Root>
  );
}
