import React from "react";
import FormField from "../../components/FormField";
import ListProduct from "../../components/ListProduct";
import ProductCard from "../../components/ProductCard";

///style////////////////////////////////
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <FormField />
      <ProductCard />
      <ListProduct />
    </Container>
  );
}
