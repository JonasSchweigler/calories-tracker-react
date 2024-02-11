import { MealDetailWrapper } from "./MealDetail.style";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { NutritionStats } from "../components/NutritionStats";
import { ServingDetails } from "../components/ServingDetails";
import { NutritionQuality } from "../components/NutritionQuality";

export const MealDetail = () => {
  return (
    <MealDetailWrapper>
      <Link className='back' to={"/"}>
        <IoMdClose />
      </Link>
      <h1 className='title'>Beef and Cheese Burger</h1>
      <NutritionStats />
      <h2>Serving Size</h2>
      <ServingDetails />
      <h2>Nutrition Quality</h2>
      <NutritionQuality />
      <h2>Ingredients</h2>
    </MealDetailWrapper>
  );
};
