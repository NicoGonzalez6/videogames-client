import React from "react";
import { Ilayout } from "./interfaces";
import styled from "styled-components";

export const Layout: React.FC<Ilayout> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;
