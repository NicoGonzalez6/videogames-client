import React from "react";
import { Ibutton } from "./interface";
import styled from "styled-components";

export const Button: React.FC<Ibutton> = ({
  children,
  onClick,
  bSize = "md",
}) => {
  return (
    <StyledButton bSize={bSize} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div<Ibutton>`
  min-width: ${({ bSize }) => {
    switch (bSize) {
      case "sm":
        return "200px";
      case "md":
        return "300px";
      default:
        break;
    }
  }};
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  text-align: center;
  border-radius: ${({ theme }) => theme.radiusses.sm};
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`;
