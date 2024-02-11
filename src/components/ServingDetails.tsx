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

interface ServingDetailsProps {
  servingSize: string;
  setServingSize: (servingSize: string) => void;
  servingSizes: string[];
  quantity: number;
  setQuantity: (value: number) => void;
}

export const ServingDetails = (props: ServingDetailsProps) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    props.setServingSize(event.target.value);
  };

  return (
    <ServingDetailsWrapper>
      <Input
        placeholder='1.0'
        id='quantity'
        value={props.quantity}
        onChange={(e) => props.setQuantity(Number.parseInt(e.target.value))}
      />
      <StyledSelect
        value={props.servingSize}
        label='Serving Size'
        onChange={(e) => {
          handleChange(e as SelectChangeEvent<string>);
        }}
      >
        {props.servingSizes.map((servingSize, index) => {
          return (
            <MenuItem key={index} value={index.toString()}>
              {servingSize}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </ServingDetailsWrapper>
  );
};
