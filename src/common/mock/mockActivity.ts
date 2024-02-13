import IActivity from "../models/IActivity";

const mockActivities : IActivity[] = [
    {
        img: "https://i.pravatar.cc/151",
        name: "Healthy Salat",
        calories: 100,
        maxCalories: 500,
        activityType: "Breakfast"
    },
    {
        img: "https://i.pravatar.cc/152",
        name: "Steak",
        calories: 750,
        maxCalories: 800,
        activityType: "Lunch"
    },
    {
        img: "https://i.pravatar.cc/153",
        name: "Apple",
        calories: 100,
        maxCalories: 200,
        activityType: "Snack"
    },
    {
        img: "https://i.pravatar.cc/154",
        name: "Pizza",
        calories: 400,
        maxCalories: 1000,
        activityType: "Dinner"
    }
];
export default mockActivities;