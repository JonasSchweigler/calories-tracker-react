import styled from "styled-components";
import Select from "@mui/material/Select";

export const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #a0a0a0;
  background-color: #f5f5f5;
  min-width: 80px;
`;

export const StyledSelect = styled(Select)`
  border: none;
  flex: 2;
  min-width: 100px;
  border-radius: 5px;
  margin: 1rem 0;
  width: 100%;
  font-size: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
`;
