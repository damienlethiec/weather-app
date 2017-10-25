import styled from "styled-components";

const H1 = styled.h1`
  margin: 0.67em 0;
  font-size: 2em;
  display: block;
  font-weight: bold;
  ${props =>
    props.heading &&
    `
    font-size: 45px;
    color: white;
    font-weight: 100;
  `};
  ${props =>
    props.forecast_header &&
    `
    font-size: 65px;
    color: #333;
    font-weight: 100;
    text-align: center;
  `}:
`;

export default H1;
