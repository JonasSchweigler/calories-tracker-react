import React from "react";
import { HomeWrapper } from "./Home.style";
import { HomeHeader } from "../components/headers/HomeHeader";
import ActivityCard from "../components/ui/ActivityCard";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <div className="greet">
        <h1>
          Good Morning <span>User</span>
        </h1>
      </div>
      <div className="meals">
        <ActivityCard
          img="https://i.pravatar.cc/150"
          name="Healthy Salat"
          calories={300}
          maxCalories={500}
          activityType="Breakfast"
        />
      </div>
      {/* TODO: Add Activity component in here (Max Roschitz) */}
    </HomeWrapper>
  );
}

export default Home;
