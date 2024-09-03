import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList";
import { TextInput } from "./UI/TextInput";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput onChange={handleChange} width={300} marginBottom={8} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};

DrinkSearch.propTypes = {
  clickFn: PropTypes.func.isRequired,
};
