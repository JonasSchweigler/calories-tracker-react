import styled from "styled-components";

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
  width: 100%;

  img {
    max-width: 400px;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      margin: 0;
    }
  }

  .options-header {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
    align-items: center;
    text-align: center;

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #28304f;
      font-weight: 900;
    }

    p {
      font-size: 1rem;
      color: #6e6e6e;
    }
  }
`;
