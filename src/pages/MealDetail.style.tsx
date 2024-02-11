import styled from "styled-components";

export const MealDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;

  .back {
    top: 0;
    left: 0;
    margin: 0 2rem;
    position: absolute;
    font-size: 1.5rem;
    color: #de9630;
  }

  .title {
    text-align: left;
    margin: 1.3rem 0;
  }
`;
