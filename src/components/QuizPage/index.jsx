import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import FourOptions from "../FourOptions";
import QuizQuestion from "../QuizQuestion";
import ProgressBar from "../ProgressBar";
import Score from "../Score";


function QuizPage({ quiz, icon,  onRestart }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = quiz.questions[index];
 
  const handleOptionSelect = (idx) => {
    setSelectedOption(idx);
    setIsSubmitted(false); 
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (
      selectedOption !== null &&
      question.options[selectedOption] === question.answer
    ) {
      setScore((prev) => prev + 1);
    }

    if (index >= quiz.questions.length - 1) {
      setIsFinished(true);
    }
}

  const handleNext = () => {
    if (index < quiz.questions.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  
  
  };

  const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsFinished(false);
    if (onRestart) onRestart();
  };

 if (isFinished) {
    return <Score title={quiz.title} icon={icon} score={score} onRestart={handleRestart} />;
  }

  return (
    <div>
      <header className='quiz-header'>
        <div className="quiz-header-left">
           <img src={icon} />
           <h2>{quiz.title}</h2>
           </div>
        <ThemeSwitcher />
      </header>
      <main className="quiz-main-content"> 
        <section className='quiz-section-left'>
            <QuizQuestion question={question} index={index} />
            <ProgressBar current={index}/>
        </section>
        <section className="quiz-section-right">
            <FourOptions
              question={question}
              questionIndex={index}
              selectedIndex={selectedOption}
              isSubmitted={isSubmitted}
              onSelect={handleOptionSelect}
            />
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={selectedOption === null ? 'button-submitted'
                    : 'button-unsubmitted'
                }
              >
                Submit Answer
              </button>
            ) : (
              index < quiz.questions.length - 1 && (
               <button onClick={handleNext}
                className={'button-unsubmitted'}>
                 Next Question
               </button>
             )
            )}
         </section>
      </main> 
    </div>
  );
}

export default QuizPage;