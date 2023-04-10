import React, { useState } from "react";
import InputDescription from "../components/input/Description";
import InputImage from "../components/input/Image";
import InputTitle from "../components/input/Title";
import InputFood from "../components/input/Food";
import InputCook from "../components/input/cook";
import InputCategory from "../components/input/category";
import InputSeaFoods from "../components/input/Seafoods";
import recipeApi from "../components/api/input";

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
        <div className="sectionBoard w-full p-5">
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
