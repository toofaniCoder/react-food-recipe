import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i class="material-icons brand-icon">fastfood</i> Food Recipe
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
