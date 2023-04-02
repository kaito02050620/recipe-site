import { useContext } from "react";
import React from "react";
import RecipeSelect from "../select/recipeSelect";
import FoodSelect from "../select/foodSelect";
import UpdateSelect from "../select/updateSelect";
import { SearchState } from "./RecipeList";
import { recipeName, foodName, updateOrder } from "../select/select";

const RecipeSerch = () => {
  const [
    selectRecipe,
    setSelectRecipe,
    selectFood,
    setSelectFood,
    selectUpdateOrder,
    setSelectUpdateOrder,
  ] = useContext(SearchState);
  return (
    <>
      <div className="flex justify-between max-w-2xl mx-auto my-0">
        <RecipeSelect
          selectRecipe={selectRecipe}
          setSelectRecipe={setSelectRecipe}
        />
        <FoodSelect selectFood={selectFood} setSelectFood={setSelectFood} />
        <UpdateSelect
          selectUpdateOrder={selectUpdateOrder}
          setSelectUpdateOrder={setSelectUpdateOrder}
        />
      </div>
    </>
  );
};

export { recipeName, foodName, updateOrder, RecipeSerch };
