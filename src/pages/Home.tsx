import React from "react";
import { HomeWrapper } from "./Home.style";
import { HomeHeader } from "../components/headers/HomeHeader";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <div className='greet'>
        <h1>
          Good Morning <span>User</span>
        </h1>
      </div>
      {/* TODO: Add Activity component in here (Max Roschitz) */}
    </HomeWrapper>
  );
}

export default Home;
