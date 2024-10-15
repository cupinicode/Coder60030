import React from "react";
import { ItemListContainer } from "../components";
import { useItemsCollection } from "../hooks";
import { Flex, Spinner, Box } from "@chakra-ui/react";

export const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Error cargando los productos
    </Box>
  ) : (
    <ItemListContainer products={items} />
  );
};