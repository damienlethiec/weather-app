import React from "react";
import InlineSearchForm from "./../../molecules/InlineSearchForm/";
import NavHeading from "./../../molecules/NavHeading/";

export default function Navbar(props) {
  return (
    <div>
      <NavHeading>Youpi</NavHeading>
      <InlineSearchForm />
    </div>
  );
}
