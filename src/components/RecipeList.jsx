import { data } from "../utils/data";
import { Box } from "@chakra-ui/react";
import { RecipeListCard } from "./RecipeListCard";

export const RecipeList = ({ matchedRecipes, clickFn }) => {
  const recipes = matchedRecipes
    ? matchedRecipes
    : data.hits.map((hit) => hit.recipe);

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      flexWrap="wrap"
      gap="8"
      justifyContent="center"
      alignItems="center"
    >
      {recipes.map((recipe) => (
        <RecipeListCard key={recipe.label} clickFn={clickFn} recipe={recipe} />
      ))}
    </Box>
  );
};
