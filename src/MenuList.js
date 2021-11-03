import React from "react";
import SingleMenu from "./SingleMenu";

const MenuList = ({ data }) => {
  return (
    <section>
      {data.map((singleMenu) => {
        return <SingleMenu key={singleMenu.id} {...singleMenu} />;
      })}
    </section>
  );
};

export default MenuList;
