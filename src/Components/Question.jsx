import React from "react";
import "./style.css";

export default ({ title, question, answers, setAnswer }) => {
  const answersBlock = answers.map((el) => (
    <button onClick={() => setAnswer(el.meaning)} className="answerBtn">
      {el.title}
    </button>
  ));
  return (
    <div className="question_container">
      <h3>Question {title}:</h3>
      <h4>{question}</h4>
      <div>{answersBlock}</div>
    </div>
  );
};
