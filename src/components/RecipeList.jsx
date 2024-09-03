import { Flex } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";

export const RecipeList = ({ drinks, clickFn }) => {
  return (
    <Flex
      gap={16}
      w={["full", "75%"]}
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="center"
      alignItems="center"
    >
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
