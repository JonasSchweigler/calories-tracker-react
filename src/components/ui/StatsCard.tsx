import styled from "styled-components";

export const StatsCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h2 {
    font-size: 0.9rem;
    font-weight: 800;
    margin: 0;

    span {
      font-size: 1rem;
      color: #feba58;
    }
  }

  p {
    font-size: 0.8rem;
    color: #8f8f8f;
    margin: 0;
  }
`;

export const MainCard = styled(StatsCard)`
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #8f8f8f;
    margin: 0;
  }
`;
