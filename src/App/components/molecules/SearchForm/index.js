import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import Input from "components/atoms/Input/index";
import ButtonLink from "components/atoms/ButtonLink/index.js";

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
      city_value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.reinitializeValue = this.reinitializeValue.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        city_value: value
      };
    });
  }
  reinitializeValue(event) {
    this.setState(function() {
      return {
        city_value: ""
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
          value={this.state.city_value}
        />

        <ButtonLink
          to={{
            pathname: "/forecast",
            search: "?city=" + this.state.city_value
          }}
          color={this.props.theme.secondary_color}
          onClick={this.reinitializeValue}
        >
          Get Weather
        </ButtonLink>
      </SearchFormBox>
    );
  }
}

export default withTheme(SearchForm);
