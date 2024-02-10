import styled from "styled-components";
import { Avatar } from "../ui/Avatar";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header-col {
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      font-size: 0.9rem;
      margin-top: 0.6rem;
      color: #9e9e9e;
    }
  }
`;

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <div className='header-col'>
        <h3>Today</h3>
        <p>Monday, 28th June</p>
      </div>
      <Avatar src='https://i.pravatar.cc/150' alt='User avatar' />
    </HeaderContainer>
  );
};
