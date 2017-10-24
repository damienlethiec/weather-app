import React, { Component } from "react";
import styled from "styled-components";
import Input from "./../../atoms/Input/index";
import Button from "./../../atoms/Button/index.js";

const SearchFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props =>
    props.inline &&
    `
    flex-direction: row;
  `};
`;

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        value: value
      };
    });
  }
  render() {
    return (
      <SearchFormBox inline={this.props.inline}>
        <Input
          type="text"
          autoComplete="off"
          placeholder="St. George, Utah"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Button green>Get Weather</Button>
      </SearchFormBox>
    );
  }
}

export default SearchForm;
