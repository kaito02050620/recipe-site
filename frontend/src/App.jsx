import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./location/ScrollTop";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import SiteDescription from "./pages/SiteDescription";
import RecipeLists from "./pages/RecipeList";
import Register from "./pages/Register";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import User from "./pages/UserEdit";
const TEST_USER = import.meta.env.VITE_TEST_USER;

const App = () => {
  return (
    <>
      <div className="bg-[url('./image/background.png')] bg-cover w-full h-full">
        <Header />
        <main className="max-w-screen-xl mx-auto mt-3 mb-52 px-8">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/siteDescription" element={<SiteDescription />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/recipeList" element={<RecipeLists />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path={`/user/${TEST_USER}`} element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
