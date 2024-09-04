import { useState } from "react";
import { Center, Heading, Box } from "@chakra-ui/react";
import { RecipeList } from "../components/RecipeList";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ clickFn }) => {
  const [matchedRecipes, setMatchedRecipes] = useState();

  return (
    <Center
      display="flex"
      flexDir="column"
      bgColor="blue.300"
      gap="8"
      minHeight="100vh"
    >
      <Heading>Recipe Checker</Heading>
      <RecipeSearch clickFn={clickFn} setMatchedRecipes={setMatchedRecipes} />
      <RecipeList clickFn={clickFn} matchedRecipes={matchedRecipes} />
      <Box flexGrow="1" bgColor="blue.300" />
    </Center>
  );
};
