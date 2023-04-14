import React from "react";

function InputFood({
  setPeople,
  foods,
  setFoods,
  ingredient,
  setIngredient,
  amount,
  setAmount,
}) {
  //何人前デフォルト値
  const howManyPeople = [1, 2, 3, 5];

  //材料削除
  const foodDelete = (e, No) => {
    e.preventDefault();
    const updateRecipe = foods.filter((food) => food.No !== No);
    updateRecipe.map((food, index) => (food.No = index + 1));
    setFoods(updateRecipe);
  };

  //材料追加
  const newFood = { No: foods.length + 1, food: ingredient, amount: amount };
  const addFoodButton = (e) => {
    e.preventDefault();
    if (ingredient === "" || amount === "") {
      alert("材料名と分量は必ずどちらも入力してください");
      return;
    }
    setFoods([...foods, newFood]);
    setIngredient("");
    setAmount("");
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="foodName">
            ◆材料名<span>*</span>
          </label>
          <select id="foodName" onChange={(e) => setPeople(e.target.value)}>
            {howManyPeople.map((people) => {
              return (
                <option value={people} key={people}>
                  {people}人前
                </option>
              );
            })}
          </select>
          <div>
            <div>
              <ul>
                {foods.map((food) => {
                  return (
                    <li key={food.No}>
                      <p>{food.food}</p>
                      <p>{food.amount}</p>
                      <button onClick={(e) => foodDelete(e, food.No)}>
                        削除
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <input
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="材料名を入力してください"
                type="text"
              />
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="分量を入力してください"
                type="text"
              />
              <button onClick={addFoodButton}>＋追加</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputFood;
