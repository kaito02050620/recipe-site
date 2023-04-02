import React, { useEffect, useState } from "react";
import Header from "./assets/common/Header";
import Footer from "./assets/common/Footer";
import Home from "./assets/components/Home";
import Developer from "./assets/components/description/Developer";
import SiteDescription from "./assets/components/description/SiteDescription";
import RecipeLists from "./assets/components/recipe/list/RecipeList";
import RecipeInput from "./assets/components/recipe/input/RecipeInput";
import UserPage from "./assets/components/UserPage";
import Recipe from "./assets/components/recipe/list/Recipe";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:3000/",
});

const App = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    baseApi.get("recipe").then((res) => {
      setResources(res.data);
    });
  }, []);

  return (
    <>
      <div className="bg-[url('./image/background.png')] bg-cover w-full h-full">
        <Header />
        <main className="max-w-screen-xl mx-auto mt-3 mb-52 px-8">
          <Routes>
            <Route path="/" element={<Home recipes={resources} />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/sitedescription" element={<SiteDescription />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recipelist" element={<RecipeLists />} />
            <Route
              path="/recipeinput"
              element={<RecipeInput recipes={resources} />}
            />
            <Route
              path="/recipe/:id"
              element={<Recipe recipes={resources} />}
            />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
