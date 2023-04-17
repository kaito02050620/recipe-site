import React from "react";
import { Link } from "react-router-dom";
import { GiCook } from "react-icons/gi";

function CreateRecipeButton() {
  return (
    <Link className="viewRecipeButton" to="/create">
      <div className="flex">
        <p className="mr-2">レシピを投稿する</p>
        <GiCook
          size={25}
          style={{ display: "inline-block", margin: "auto", opacity: "0.9" }}
        />
      </div>
    </Link>
  );
}

export default CreateRecipeButton;
