import React from "react";
import { useParams } from "react-router-dom";

function Recipe({ recipes }) {
  const { id } = useParams();
  const findReicpe = recipes.find((p) => p.id === parseInt(id));
  if (!findReicpe) {
    return <div>not found</div>;
  }

  return (
    <div className="sectionBoad w-full p-5">
      <h1>{findReicpe.title}</h1>
      <div>
        <img src={findReicpe.image} alt={findReicpe.title} />
      </div>
      <p>{findReicpe.description}</p>
      <div>
        <h2>◆材料&nbsp;{findReicpe.peoplecount}人前</h2>
        <ul>
          {findReicpe.food.map((el) => {
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
          {findReicpe.cook.map((el) => {
            return <li key={el.id}>{el.recipe}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
