import React from "react";
import Catalogue from "../components/Catalogue";
import FilterProducts from "../components/FilterProducts";
import ProductPagination from "../components/ProductPagination";

const SearchPage = () => {
  return (
    <div className="search-main">
      <FilterProducts />
      <Catalogue />
    </div>
  );
};

export default SearchPage;
