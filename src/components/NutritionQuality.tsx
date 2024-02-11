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

interface NutritionQualityProps {
  avatar?: string;
  description: string;
}

export const NutritionQuality = (props: NutritionQualityProps) => {
  return (
    <NutritionQualityWrapper>
      <Avatar
        alt='Remy Sharp'
        src={props.avatar || "https://i.pravatar.cc/150"}
      />
      <p>{props.description}</p>
    </NutritionQualityWrapper>
  );
};
