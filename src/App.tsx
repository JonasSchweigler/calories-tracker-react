import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Questions from "./pages/Questions";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Questions />} />
    </Routes>
  );
}

export default App;
