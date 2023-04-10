import React from "react";
import Dinner from "../components/home/Dinner";
import MonthTheme from "../components/home/MonthTheme";
import Ranking from "../components/home/Ranking";

function Home() {
  return (
    <>
      <section className="flex justify-between mb-10">
        <Dinner />
        <MonthTheme />
      </section>
      <Ranking />
    </>
  );
}

export default Home;
