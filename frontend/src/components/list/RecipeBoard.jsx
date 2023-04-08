import React from "react";
import { Link } from "react-router-dom";

function RecipeBoard(recipe) {
  return (
    <li className="h-52 w-full p-5 recipeListBoard mb-5 flex items-center">
      <div className="w-2/5 ">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="w-3/5 ml-3 h-full relative">
        <h3 className="text-xl mb-6">{recipe.title}</h3>
        <p>{recipe.description}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="viewRecipeButton absolute bottom-0 -right-0"
        >
          レシピを見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </li>
  );
}

export default RecipeBoard;
