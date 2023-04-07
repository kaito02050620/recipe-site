import React, { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import SiteDescription from "./pages/SiteDescription";
import RecipeLists from "./pages/RecipeList";
import RecipeInput from "./components/input/RecipeInput";
import UserPage from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Recipe from "./components/list/Recipe";

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
      <div className="bg-[url('./assets/image/background.png')] bg-cover w-full h-full">
        <Header />
        <main className="max-w-screen-xl mx-auto mt-3 mb-52 px-8">
          <Routes>
            <Route path="/" element={<Home recipes={resources} />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/siteDescription" element={<SiteDescription />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recipeList" element={<RecipeLists />} />
            <Route
              path="/recipeInput"
              element={<RecipeInput recipes={resources} />}
            />
            <Route
              path="/recipe/:id"
              element={<Recipe recipes={resources} />}
            />
            <Route path="/userPage" element={<UserPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
