import React from "react";

function InputDescription({ description, setDescription }) {
  return (
    <div>
      <label htmlFor="recipeDescription">
        料理について説明<span>*</span>
      </label>
      <textarea
        value={description}
        id="recipeDescription"
        placeholder="説明を書いてください"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default InputDescription;
