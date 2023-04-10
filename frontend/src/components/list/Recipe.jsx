import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("heee");
    // const getRecipe = async () => {
    //   const res = await axios.get(API_SERVER + "/posts/" + id);
    //   setRecipe(res.data);
    // };
    // getRecipe();
  }, []);

  // const findRecipe = recipe.find((p) => p.id === parseInt(_id));
  // if (!findRecipe) {
  //   return <div>not found</div>;
  // }

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
          {recipe.food.map((el) => {
            return (
              <li key={el.food}>
                <p>{el.food}</p>
                <p>{el.amount}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>◆作り方</h2>
        <ul>
          {" "}
          {recipe.cook.map((el) => {
            return <li key={el._id}>{el.recipe}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
