import React, { useState } from "react";
import InputDescription from "../components/input/Description";
import InputImage from "../components/input/Image";
import InputTitle from "../components/input/Title";
import InputFood from "../components/input/Food";
import InputCook from "../components/input/cook";
import InputCategory from "../components/input/category";
import InputSeaFoods from "../components/input/Seafoods";
import axios from "axios";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const TEST_USER = import.meta.env.VITE_TEST_USER;

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

  //   {
  //     "userId": "64294cc89543f808bc64d7ae",
  //     "title": "たこ焼き",
  //     "description": "てすと",
  //     "image": "sample.png",
  //     "people": 1,
  //     "seafood": ["タイ"],
  //     "category": ["鍋"],
  //     "foods": [{"No": 1,"food": "カレイ", "amount": "2枚" },{"No": 2,"food": "醤油","amount": "大さじ3"}],
  //     "recipes": [{"No": 1,"recipe":"カレイの下処理"},{"No": 2,"recipe": "醤油と30分煮込む"}]
  // }

  //クリエイトボタン（axiosでAPIたたく）　リダイレクト　ユーザーページへ　プレビュー

  const newRecipe = {
    userId: TEST_USER,
    title: title,
    image: image,
    category: category,
    seafoods: seaFoods,
    foods: foods,
    description: description,
    people: Number(people),
    recipes: cooks,
  };

  // console.log(newRecipe);

  const createRecipeButton = (e) => {
    e.preventDefault();

    if (
      Object.values(newRecipe).every(
        (value) => value !== "" && value.length !== 0
      )
    ) {
      alert("正常にデータが入力されました。");
      const createRecipe = () => {
        axios.post(API_SERVER + "/posts", newRecipe);
      };
      createRecipe();
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
          <button onClick={(e) => createRecipeButton(e)}>送信</button>
        </div>
      </form>
    </>
  );
}

export default RecipeInput;
