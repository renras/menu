import React from "react";

const Nav = ({ categories, changeCategory }) => {
  return (
    <nav>
      <ul>
        {categories.map((singleCategory) => {
          return (
            <li
              onClick={() => changeCategory(singleCategory)}
              key={singleCategory}
            >
              {singleCategory}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
