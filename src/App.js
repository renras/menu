import React, { useState } from "react";
import Nav from "./Nav";
import menu from "./menu";
import MenuList from "./MenuList";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [data, setData] = useState(menu);

  const changeCategory = (category) => {
    if (category === "all") {
      setData(menu);
      return;
    }

    const newData = menu.filter((items) => items.category === category);
    setData(newData);
  };

  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <Nav categories={allCategories} changeCategory={changeCategory} />
      <MenuList data={data} />
    </main>
  );
}

export default App;
