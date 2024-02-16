import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home.style";
import { HomeHeader } from "../components/headers/HomeHeader";
import ActivityCard from "../components/ui/ActivityCard";
import activitiesMock from "../common/mock/mockActivity";
import IActivity from "../common/models/IActivity";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import IUser from "../common/models/IUser";
import { Stats } from "../components/Stats";

function Home() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [user, setUser] = useState<IUser | null>({} as IUser);
  const { currentUser } = useAuth();

  const db = getFirestore();

  const usersCollectionRef = collection(db, "userdata");

  const getUserData = async () => {
    const q = query(usersCollectionRef, where("uid", "==", currentUser?.uid));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as IUser),
      id: doc.id,
    }));

    // Assuming you are looking for a single entry by uid
    if (data.length > 0) {
      console.log("User found with the given uid", data[0]);
      setUser(data[0]);
    } else {
      // Handle the case where there is no matching document
      console.log("No user found with the given uid");
    }
  };

  useEffect(() => {
    setActivities(activitiesMock);
    getUserData();
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
      text-decoration: none;
    }

    @media screen and (max-width: 500px) {
      h2 {
        font-size: 1.4rem;
      }

      a {
        font-size: 1rem;
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
      <div className='greet'>
        <h1>
          Good Morning <span>{user?.userName}</span>
        </h1>
      </div>
      <Stats />
      <MealWrapper>
        <MealHeaderWrapper>
          <h2>Today's Activity</h2>
          <a href='/activities'>View All</a>
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
