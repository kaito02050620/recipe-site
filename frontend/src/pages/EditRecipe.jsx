import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

function EditRecipe() {
  const [userRecipe, setUserRecipe] = useState([]);
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

  //投稿したレシピを取得、各入力値更新
  const { id } = useParams();
  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(API_SERVER + "/posts/" + id);
      setUserRecipe(res.data[0]);
      setSeaFoods(res.data[0].seafoods);
      setCategory(res.data[0].category);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
      setImage(res.data[0].image);
      setPeople(res.data[0].people);
      setFoods(res.data[0].foods);
      setCooks(res.data[0].recipes);
    };
    getRecipe();
  }, []);

  if (userRecipe === null) {
    return <p>読み込み中...</p>;
  }

  //更新用オブジェクト
  const editRecipe = {
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

  //編集完了ボタン、未入力チェック
  const createRecipeButton = (e) => {
    e.preventDefault();

    if (
      Object.values(editRecipe).every(
        (value) => value !== "" && value.length !== 0
      )
    ) {
      alert("投稿を編集しました。");
      const createRecipe = () => {
        axios.put(API_SERVER + "/posts/" + userRecipe._id, editRecipe);
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
          <InputTitle title={title} setTitle={setTitle} />
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
          <button onClick={(e) => createRecipeButton(e)}>編集完了</button>
        </div>
      </form>
    </>
  );
}

export default EditRecipe;
