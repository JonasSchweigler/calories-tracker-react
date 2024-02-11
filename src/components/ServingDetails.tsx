import React, { useState } from "react";
import styled from "styled-components";
import { Input, StyledSelect } from "./ui/Input";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ServingDetailsWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap-reverse;
`;

export const ServingDetails = () => {
  const [age, setAge] = useState("1");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  return (
    <ServingDetailsWrapper>
      <Input placeholder='1.0' />
      <StyledSelect
        value={age}
        label='Age'
        onChange={(e) => {
          handleChange(e as SelectChangeEvent<string>);
        }}
      >
        <MenuItem value={"1"}>Burger small (100g)</MenuItem>
        <MenuItem value={"2"}>Burger medium (200g)</MenuItem>
        <MenuItem value={"3"}>Burger large (300g)</MenuItem>
      </StyledSelect>
    </ServingDetailsWrapper>
  );
};
