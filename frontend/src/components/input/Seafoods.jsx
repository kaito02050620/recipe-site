import React from "react";
import { foodName } from "../select/select";

function InputSeaFoods({ seaFoods, setSeaFoods, seaFood, setSeaFood }) {
  //海鮮削除
  const seaFoodDelete = (e, No) => {
    e.preventDefault();
    const updateSeafoods = seaFoods.filter((seafood) => seafood.No !== No);
    updateSeafoods.map((seafood, index) => (seafood.No = index + 1));
    setSeaFoods(updateSeafoods);
  };

  //海鮮追加
  const newSeaFood = { No: seaFoods.length + 1, seafood: seaFood };
  const addSeaFood = (e) => {
    e.preventDefault();
    if (seaFood === "") {
      alert("この海鮮は追加出来ません。");
      return;
    } else if (seaFood === "海鮮名") {
      alert("この海鮮は追加出来ません。");
      return;
    }

    for (let i = 0; i < seaFoods.length; i++) {
      if (seaFoods[i].seafood === seaFood) {
        alert("すでに追加された海鮮です。");
        return;
      }
    }

    setSeaFoods([...seaFoods, newSeaFood]);
  };

  return (
    <div className="block relative w-48">
      <div>
        <h2>
          メインの海鮮<span>*</span>
        </h2>
        <ul>
          {seaFoods.map((food) => {
            return (
              <li key={food.No}>
                <p>{food.seafood}</p>
                <button onClick={(e) => seaFoodDelete(e, food.No)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <select
        value={seaFood}
        onChange={(e) => setSeaFood(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {foodName.map((food) => {
          return (
            <option key={food} value={food}>
              {food}
            </option>
          );
        })}
      </select>
      <button onClick={addSeaFood}>追加</button>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default InputSeaFoods;
