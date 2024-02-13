import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home.style";
import { HomeHeader } from "../components/headers/HomeHeader";
import ActivityCard from "../components/ui/ActivityCard";
import activitiesMock from "../common/mock/mockActivity";
import IActivity from "../common/models/IActivity";
import styled from "styled-components";

function Home() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    setActivities(activitiesMock);
  }, []);

  const MealWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const MealHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    gap: 0.9rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      font-size: 1.3rem;
      color: #9e9e9e;
    }

    @media screen and (max-width: 500px) {
      h2 {
        font-size: 1.4rem;
      }

      a {
        font-size: 1.1rem;
      }
    }

    @media screen and (max-width: 350px) {
      h2 {
        font-weight: 800;
        font-size: 1.2rem;
      }

      a {
        font-size: 0.9rem;
      }
    }
  `;

  return (
    <HomeWrapper>
      <HomeHeader />
      <div className="greet">
        <h1>
          Good Morning <span>User</span>
        </h1>
      </div>
      <MealWrapper>
        <MealHeaderWrapper>
          <h2>Today's Activity</h2>
          <a href="/activities">View All</a>
        </MealHeaderWrapper>
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
      </MealWrapper>
      {/* TODO: Add Activity component in here (Max Roschitz) */}
    </HomeWrapper>
  );
}

export default Home;
