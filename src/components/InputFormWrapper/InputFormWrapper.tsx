import React from "react";
import { IwrapperInputForm } from "./interface";
import styled from "styled-components";

export const InputFormWrapper: React.FC<IwrapperInputForm> = ({
  id,
  name,
  onChange,
  value,
}) => {
  return <StyledInput id={id} name={name} onChange={onChange} value={value} />;
};

const StyledInput = styled.input`
  outline: none;
  border-radius: ${({ theme }) => theme.radiusses.md};
  border: none;
  padding: 0 10px;
`;
