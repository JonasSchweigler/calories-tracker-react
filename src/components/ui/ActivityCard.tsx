import styled from "styled-components";
import { Avatar } from "./Avatar";

interface ActivityCardProps {
  img: string;
  name: string;
  calories: number;
  activityType: string;
  maxCalories: number;
}

const ActivityCard = (props: ActivityCardProps) => {
  console.log(`react snippet works!`);

  const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    gap: 2rem;
    padding: 0.8rem;
    border-radius: 1rem;
    background-color: rgb(248, 249, 253);
    margin-top: 1rem;

    @media screen and (max-width: 500px) {
      gap: 0.5rem;
      padding: 0.2rem;
    }
  `;

  const AvatarWrapper = styled.div`
    flex: 0 0 0px;

    .activityPicture {
      border: 0.4rem solid white;
      width: 4rem;
      height: 4rem;
    }

    @media screen and (max-width: 265px) {
      flex: 1 0 0px;
      text-align: center;
      .activityPicture {
        text-align: center;
      }
    }
  `;

  const ColumnWrapper = styled.div`
    flex: 2 0 0px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: start;

    h3 {
      font-size: 1.4rem;
      font-weight: 650;
      min-width: 6.5rem;
    }

    p {
      min-width: 5.5rem;
      color: rgb(168, 171, 186);
    }

    @media screen and (max-width: 500px) {
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }

    @media screen and (max-width: 265px) {
      text-align: center;
    }
  `;

  const ActivityType = styled.p`
    flex: 1 0 0px;
    margin: 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding: 0.5rem;
    background-color: white;
    border-radius: 2rem;

    color: ${(props: any) => props.theme.main};

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  `;

  const getTheme = (activityType: string) => {
    switch (activityType) {
      case "Breakfast":
        return "rgb(163, 194, 88)";
      case "Lunch":
        return "rgb(242, 122, 74)";
      case "Snack":
        return "purple";
      default:
        return "blue";
    }
  };

  return (
    <CardWrapper>
      <AvatarWrapper>
        <Avatar
          className="activityPicture"
          src={props.img}
          alt="Activity picture"
        />
      </AvatarWrapper>
      <ColumnWrapper>
        <h3>{props.name}</h3>
        <p>
          {props.calories}/{props.maxCalories} kcal
        </p>
      </ColumnWrapper>
      <ActivityType theme={{ main: getTheme(props.activityType) }}>
        {props.activityType}
      </ActivityType>
    </CardWrapper>
  );
};

export default ActivityCard;
