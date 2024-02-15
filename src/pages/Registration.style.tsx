import styled from "styled-components";

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0.5rem 0rem;
  }
  .loginText {
    text-align: center;
  }

  h1 {
    padding: 1rem 0rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: rgb(254, 186, 88);
  }

  img {
    max-width: 300px;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      margin: 0;
    }
    padding-top: 1rem;
  }
`;
