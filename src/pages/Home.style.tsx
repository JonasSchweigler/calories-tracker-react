import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .greet {
    h1 {
      font-weight: 300;
      font-size: 2.5rem;

      span {
        font-weight: bold;
      }
    }
  }
`;
