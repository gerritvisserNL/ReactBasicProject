import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Text } from "@chakra-ui/react";

export const RecipeSearch = ({ setMatchedRecipes }) => {
  const recipes = data.hits.map((hit) => hit.recipe);
  const [noResults, setNoResults] = useState(false);

  const handleChange = (event) => {
    const matchedRecipes = recipes.filter((recipe) => {
      return recipe.label
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setMatchedRecipes(matchedRecipes);

    if (matchedRecipes.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      {noResults && (
        <Text color="red.500" fontWeight="bold" mt="2">
          No recipes found.
        </Text>
      )}
    </>
  );
};
