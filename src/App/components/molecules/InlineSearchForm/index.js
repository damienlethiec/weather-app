import React from "react";
import SearchBox from "./../../atoms/SearchBox/index";
import SearchButton from "./../../atoms/SearchButton/index";

export default function InlineSearchForm(props) {
  return (
    <div>
      <SearchBox placeholder="test" />
      <SearchButton>Button</SearchButton>
    </div>
  );
}
