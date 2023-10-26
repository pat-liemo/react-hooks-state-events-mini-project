import React, { useState } from "react";

function CategoryFilter(props) {
  const[classname, setClassName] = useState("");

  function categoryHandler() {
    setClassName("selected")
  }

  const newArray = props.categories.map(function(category, index) {
    return (
      <button className={classname} key={index} onClick={categoryHandler}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {newArray}
    </div>
  );
}

export default CategoryFilter;
