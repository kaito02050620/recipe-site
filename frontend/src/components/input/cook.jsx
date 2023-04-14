import React from "react";

function InputCook({ cooks, setCooks, recipe, setRecipe }) {
  //作り方削除
  const recipeDelete = (e, No) => {
    e.preventDefault();
    const updateCooks = cooks.filter((cook) => cook.No !== No);
    updateCooks.map((cook, index) => (cook.No = index + 1));
    setCooks(updateCooks);
  };

  //作り方追加
  const newCooks = { No: cooks.length + 1, recipe: recipe };
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
                  <li key={cook.No}>
                    <p>{cook.recipe}</p>
                    <button onClick={(e) => recipeDelete(e, cook.No)}>
                      削除
                    </button>
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
