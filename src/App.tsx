import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import { MainLayout } from "./components/layout/MainLayout";
import { MealDetail } from "./pages/MealDetail";
import Activities from "./pages/Activities";
import Registration from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/meal" element={<MealDetail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
