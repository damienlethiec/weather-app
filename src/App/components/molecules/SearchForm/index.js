import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import Input from "./../../atoms/Input/index";
import ButtonLink from "./../../atoms/ButtonLink/index.js";

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
      city: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        city: value
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
          value={this.state.city}
        />
        <ButtonLink
          to={{
            pathname: "/forecast",
            search: "?city=" + this.state.city
          }}
          color={this.props.theme.secondary_color}
        >
          Get Weather
        </ButtonLink>
      </SearchFormBox>
    );
  }
}

export default withTheme(SearchForm);
