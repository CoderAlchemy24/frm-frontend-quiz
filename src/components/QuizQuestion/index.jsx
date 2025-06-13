function QuizQuestion({ question, index }) {
  return (
    <div className="quiz-question">
      <p className="quiz-question-counter-text">
        Question {Number(index) + 1} of 10
      </p>
      <h2>{question.question}</h2>
    </div>
  );
}

export default QuizQuestion;
