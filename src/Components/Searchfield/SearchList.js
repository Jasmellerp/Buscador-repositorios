
import React, { useState } from "react";
import "../css/Style.css";
import CardList from "../CardsList";
import SearchIcon from "../SearchIcon";

function SearchList() {

  const [search, setSearch] = useState();
  const handleKey = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
    }
  }

  return (
    <div>
      <div className="search-header">
        <input type="text" className="Search" placeholder="Search..." onKeyUp={handleKey} />
        <button disabled="true"><SearchIcon /></button>
      </div>
      {search && <CardList repo={search} />}
    </div>
  )

}

export default SearchList;
