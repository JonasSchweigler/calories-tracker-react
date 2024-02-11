import { MealDetailWrapper } from "./MealDetail.style";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { NutritionStats } from "../components/NutritionStats";
import { ServingDetails } from "../components/ServingDetails";
import { NutritionQuality } from "../components/NutritionQuality";
import { useState } from "react";

export const MealDetail = () => {
  const servingSizes = [
    "Burger small (100g)",
    "Burger medium (200g)",
    "Burger large (300g)",
  ];
  const [servingSize, setServingSize] = useState("0");
  const [quantity, setQuantity] = useState(1);

  const nutritionQualities =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea";

  return (
    <MealDetailWrapper>
      <Link className='back' to={"/"}>
        <IoMdClose />
      </Link>
      <h1 className='title'>Beef and Cheese Burger</h1>
      <NutritionStats />
      <h2>Serving Size</h2>
      <ServingDetails
        servingSize={servingSize}
        setServingSize={setServingSize}
        servingSizes={servingSizes}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <h2>Nutrition Quality</h2>
      <NutritionQuality description={nutritionQualities} />
    </MealDetailWrapper>
  );
};
