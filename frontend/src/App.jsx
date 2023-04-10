import React, { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import SiteDescription from "./pages/SiteDescription";
import RecipeLists from "./pages/RecipeList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/list/Recipe";
import Login from "./pages/Login";
import User from "./pages/UserEdit";

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/image/background.png')] bg-cover w-full h-full">
        <Header />
        <main className="max-w-screen-xl mx-auto mt-3 mb-52 px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/siteDescription" element={<SiteDescription />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recipeList" element={<RecipeLists />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user:username" element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
