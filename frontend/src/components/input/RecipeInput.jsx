import React, { useState } from "react";
import InputDescription from "./Description";
import InputImage from "./Image";
import InputTitle from "./Title";
import InputFood from "./Food";
import InputCook from "./cook";
import InputCategory from "./category";
import InputSeaFoods from "./Seafoods";
import recipeApi from "../api/input";

function RecipeInput() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("");
  const [seaFood, setSeaFood] = useState("");
  const [seaFoods, setSeaFoods] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [cooks, setCooks] = useState([]);
  const [people, setPeople] = useState(1);

  const newRecipe = {
    title: title,
    image: image,
    category: category,
    seafood: seaFoods,
    food: foods,
    description: description,
    people: people,
    cook: cooks,
  };

  console.log(newRecipe);

  const createRecipe = (e) => {
    e.preventDefault();
    if (
      Object.values(newRecipe).every(
        (value) => value !== "" && value.length !== 0
      )
    ) {
      alert("正常にデータが入力されました。");
      recipeApi.post(newRecipe).then();
    } else {
      alert("未入力の項目があります");
    }
  };

  return (
    <>
      <form>
        <div className="sectionBoad w-full p-5">
          <InputTitle value={title} setTitle={setTitle} />
          <InputImage image={image} setImage={setImage} />
          <InputCategory category={category} setCategory={setCategory} />
          <InputSeaFoods
            seaFood={seaFood}
            setSeaFood={setSeaFood}
            seaFoods={seaFoods}
            setSeaFoods={setSeaFoods}
          />
          <InputDescription
            description={description}
            setDescription={setDescription}
          />
          <InputFood
            setPeople={setPeople}
            foods={foods}
            setFoods={setFoods}
            ingredient={ingredient}
            setIngredient={setIngredient}
            amount={amount}
            setAmount={setAmount}
          />
          <InputCook
            cooks={cooks}
            setCooks={setCooks}
            recipe={recipe}
            setRecipe={setRecipe}
          />
          <button onClick={createRecipe}>送信</button>
        </div>
      </form>
    </>
  );
}

export default RecipeInput;
