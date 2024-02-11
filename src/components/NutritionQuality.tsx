import { Avatar } from "@mui/material";
import styled from "styled-components";

export const NutritionQualityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;

  p {
    flex: 1;
    min-width: 150px;
  }
`;

export const NutritionQuality = () => {
  return (
    <NutritionQualityWrapper>
      <Avatar alt='Remy Sharp' src='https://i.pravatar.cc/150' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
    </NutritionQualityWrapper>
  );
};
