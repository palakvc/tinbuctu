import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1.1em;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "gold")};;
  background-color: transparent;
  border: none;
  border-radius: 90px;
  width:${(props) => (props.width ? props.width : "")};
  box-shadow: 6px 6px 14px 0 rgb(0 0 0 / 50%),
    -7px -7px 12px 0 rgb(249 249 249 / 9%);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 1em;
  font-size:3em;
  &:hover {
    box-shadow: 6px 6px 14px 0 rgb(249 249 249 / 9%); inset,
     -7px -7px 12px 0 rgb(0 0 0 / 50%) inset;
     cursor: pointer;
`;

const StyledButton = ({ content = "", width = "", onClick, color }) => {
  return (
    <Button width={width} onClick={onClick} color={color}>
      {content}
    </Button>
  );
};
export default StyledButton;
