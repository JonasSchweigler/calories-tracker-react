import { useState } from "react";
import styled from "styled-components";
import { OptionButton } from "./ui/Button";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;

  .active {
    background-color: #feba58;
    color: white;

    &:hover {
      background-color: #feba58;
    }
  }
`;

const options = ["Be Fit & Healthy", "Lose Some Weight", "Gain Some Weight"];

export const QuestionOptions = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <QuestionContainer>
      {options.map((option, index) => (
        <OptionButton
          key={index}
          onClick={() => setSelected(index)}
          className={selected === index ? "active" : ""}
        >
          {option}
        </OptionButton>
      ))}
    </QuestionContainer>
  );
};
