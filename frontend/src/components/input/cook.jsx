import React from "react";

function InputCook({ cooks, setCooks, recipe, setRecipe }) {
  const recipeDelete = (id) => {
    setCooks(cooks.filter((cook) => cook.id !== id));
  };

  const newCooks = { id: cooks.length + 1, recipe: recipe };
  const addRecipe = (e) => {
    e.preventDefault();
    if (recipe === "") {
      alert("作り方を必ず1つ以上入力しましょう");
      return;
    }
    setCooks([...cooks, newCooks]);
    setRecipe("");
  };

  return (
    <div>
      <div>
        <label htmlFor="foodName">
          ◆作り方<span>*</span>
        </label>
        <div>
          <div>
            <ul>
              {cooks.map((cook) => {
                return (
                  <li key={cook.id}>
                    <p>{cook.recipe}</p>
                    <button onClick={() => recipeDelete(cook.id)}>削除</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <textarea
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
              placeholder="作り方を入力しましょう"
            />
            <button onClick={addRecipe}>＋追加</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputCook;
