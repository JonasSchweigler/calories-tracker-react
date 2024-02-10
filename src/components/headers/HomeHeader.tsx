import styled from "styled-components";
import { Avatar } from "../ui/Avatar";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <h1>Home</h1>
      <Avatar src='https://i.pravatar.cc/150' alt='User avatar' />
    </HeaderContainer>
  );
};
