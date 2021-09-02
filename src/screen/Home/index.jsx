import React from "react";
import FormField from "../../components/FormField";
import ListProduct from "../../components/ListProduct";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  return (
    <div>
      <FormField />
      
      <ListProduct />

      <ProductCard/>
    </div>
  );
}
