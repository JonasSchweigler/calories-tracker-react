import styled from "styled-components";

export const OptionButton = styled.button`
  outline: none;
  border: none;
  background-color: #f8f9fd;
  padding: 1.4rem 2rem;
  border-radius: 100rem;
  transition: all 0.5s ease;
  color: black;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  margin-bottom: 1rem;

  &:hover {
    background-color: #e7e9f4;
  }

  &:active {
    background-color: #feba58;
    color: white;
  }
`;

export const RegisterButton = styled(OptionButton)`
  background-color: #feba58;
  color: white;
  transition: 0.2s;

  &:hover {
    background-color: #feba58;
    color: white;
  }

  &:active {
    background-color: black;
  }
`;
