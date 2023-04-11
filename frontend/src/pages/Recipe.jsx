import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(API_SERVER + "/posts/" + id);
      setRecipe(res.data[0]);
    };
    getRecipe();
  }, []);

  if (recipe === null) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className="sectionBoard w-full p-5">
      <h1>{recipe.title}</h1>
      <div>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <p>{recipe.description}</p>
      <div>
        <h2>◆材料&nbsp;{recipe.people}人前</h2>
        <ul>
          {recipe.foods.map((item) => {
            return (
              <li key={item._id}>
                <p>{item.food}</p>
                <p>{item.amount}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>◆作り方</h2>
        <ul>
          {recipe.recipes.map((item) => {
            return <li key={item._id}>{item.recipe}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
