import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home.style";
import { HomeHeader } from "../components/headers/HomeHeader";
import ActivityCard from "../components/ui/ActivityCard";
import activitiesMock from "../common/mock/mockActivity";
import IActivity from "../common/models/IActivity";

function Home() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    setActivities(activitiesMock);
  }, []);

  return (
    <HomeWrapper>
      <HomeHeader />
      <div className="greet">
        <h1>
          Good Morning <span>User</span>
        </h1>
      </div>
      <div className="meals">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.name}
            img={activity.img}
            name={activity.name}
            calories={activity.calories}
            activityType={activity.activityType}
            maxCalories={activity.maxCalories}
          />
        ))}
      </div>
      {/* TODO: Add Activity component in here (Max Roschitz) */}
    </HomeWrapper>
  );
}

export default Home;
