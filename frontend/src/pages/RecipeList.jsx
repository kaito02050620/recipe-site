import React, { useState, createContext, useEffect } from "react";
import RecipeBoard from "../components/list/RecipeBoard";
import {
  RecipeSerch,
  recipeName,
  foodName,
  updateOrder,
} from "../components/list/RecipeSerch";
export const SearchState = createContext();
import ReactPaginate from "react-paginate";
import recipeApi from "../components/api/input";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(recipeName[0]);
  const [selectFood, setSelectFood] = useState(foodName[0]);
  const [selectUpdateOrder, setSelectUpdateOrder] = useState(updateOrder[0]);
  const [offset, setOffset] = useState(0);
  const perPage = 5;

  //DBからレシピリストを取得
  useEffect(() => {
    recipeApi.getAll().then((recipe) => {
      setRecipes(recipe);
    });
  }, []);

  //日付をDateオブジェクトに変換
  const changeData = () => {
    recipes.forEach((recipe) => {
      recipe.date = new Date(recipe.date);
    });
  };

  //日付順にソート処理
  const UpdateSearch = recipes.sort((a, b) => {
    changeData();
    if (selectUpdateOrder !== "新しい順") {
      return a.date - b.date;
    } else {
      return b.date - a.date;
    }
  });

  //料理名と海鮮名の選択による処理
  const filterRecipe = UpdateSearch.filter((recipe) => {
    const defaultRecipe = selectRecipe === "料理名";
    const defaultName = selectFood === "海鮮名";
    const selectedRecipe = recipe.category.includes(selectRecipe);
    const selectedName = recipe.seafood.includes(selectFood);

    if (defaultRecipe && defaultName) {
      return true;
    } else if (selectedRecipe && defaultName) {
      return true;
    } else if (selectedName && defaultRecipe) {
      return true;
    } else if (selectedRecipe && selectedName) {
      return true;
    } else return false;
  });

  //料理名と海鮮名の選択による処理
  const serchRecipe = filterRecipe
    .slice(offset, offset + perPage)
    .map((recipe) => {
      return <RecipeBoard key={recipe.id} {...recipe} />;
    });

  //ページネーション選択処理
  const handlePageChange = (data) => {
    let page_number = data["selected"];
    setOffset(page_number * perPage);
  };

  return (
    <div className="sectionBoad w-full p-5 ">
      <h1 className="text-3xl mb-10">レシピ一覧</h1>
      <SearchState.Provider
        value={[
          selectRecipe,
          setSelectRecipe,
          selectFood,
          setSelectFood,
          selectUpdateOrder,
          setSelectUpdateOrder,
        ]}
      >
        <RecipeSerch />
      </SearchState.Provider>
      <ul className="mt-11">
        {serchRecipe.length === 0 ? (
          <h2 className="text-3xl my-6 text-center">検索結果はありません。</h2>
        ) : (
          serchRecipe
        )}
      </ul>
      <ReactPaginate
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        breakLabel={"..."}
        pageCount={Math.ceil(filterRecipe.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageChange}
        containerClassName={"flex items-center justify-center mt-8 mb-4"}
        pageClassName={"m-1 w-7 h-10 rounded-sm border border-gray-800"}
        pageLinkClassName={"px-2 py-3 leading-10"}
        activeClassName={"bg-white bg-opacity-50"}
        previousClassName={"m-1 w-7 h-10 rounded-sm border border-gray-800"}
        nextClassName={"m-1 w-7 h-10 rounded-sm border border-gray-800"}
        previousLinkClassName={"px-1 py-2 leading-9"}
        nextLinkClassName={"px-1 py-3 leading-9"}
      />
    </div>
  );
}

export default RecipeList;