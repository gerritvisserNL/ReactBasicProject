import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ setMatchedRecipes }) => {
  const recipes = data.hits.map((hit) => hit.recipe);

  const [searchField, setSearchField] = useState("");

  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
    setMatchedRecipes(matchedRecipes);
  };

  return <TextInput onChange={handleChange} />;
};
