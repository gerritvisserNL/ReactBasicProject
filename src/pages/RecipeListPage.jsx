import { data } from "../utils/data";
import { RecipeListCard } from "../components/RecipeListCard";
import { Center, Heading, Box } from "@chakra-ui/react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const recipes = data.hits.map((hit) => hit.recipe);

  return (
    <Center display="flex" flexDir="column" bgColor="blue.300" gap="8">
      <Heading>Recipe Checker</Heading>
      <TextInput width={300} placeholder="Search recipes" />
      <Box
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        gap="8"
        justifyContent="center"
        alignItems="center"
      >
        {recipes.map((recipe) => (
          <RecipeListCard
            key={recipe.label}
            clickFn={clickFn}
            recipe={recipe}
          />
        ))}
      </Box>
      <Box h="1rem" />
    </Center>
  );
};
