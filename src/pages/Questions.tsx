import React from "react";
import { QuestionWrapper } from "./Questions.style";
import { QuestionOptions } from "../components/QuestionOptions";
import QuestionLogo from "../assets/question-logo.svg";

function Questions() {
  return (
    <QuestionWrapper>
      <img src={QuestionLogo} alt="logo" />
      <div className="options-header">
        <h1>Your Goal?</h1>
        <p>Don't worry, you can change this later.</p>
      </div>
      <QuestionOptions />
    </QuestionWrapper>
  );
}

export default Questions;
