import React from "react";

function InputTitle({ title, setTitle }) {
  return (
    <div>
      <label htmlFor="recipeName">
        料理名<span>*</span>
      </label>
      <input
        value={title}
        id="recipeName"
        placeholder="料理名を入力してください"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default InputTitle;
