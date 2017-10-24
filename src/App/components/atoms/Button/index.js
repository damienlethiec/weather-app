import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  ${props =>
    props.green &&
    `
    color: #fff;
    background-color: ${props.theme.secondary_color};
    border-color: #4cae4c;
  `};
`;

export default Button;
