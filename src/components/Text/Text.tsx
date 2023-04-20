import styled from "styled-components";
import { Itext } from "./interface";

export const Text: React.FC<Itext> = ({ children, textType = "text" }) => {
  return <StyledText textType={textType}>{children}</StyledText>;
};

const StyledText = styled.p<Itext>`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.5px;
  font-size: ${({ textType }) => {
    switch (textType) {
      case "title":
        return "25px";
      case "subtitle":
        return "14px";
      case "text":
        return "12px";
    }
  }};
`;
