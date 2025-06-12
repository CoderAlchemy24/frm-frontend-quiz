import QuizOption from "../QuizOption";


function FourOptions({ question, selectedIndex, isSubmitted, onSelect }) {

  const handleOptionClick = (idx) => {
    if (!isSubmitted && onSelect) onSelect(idx);
  };

  return (
    <>
      {question.options.map((option, idx) => {
        let optionClass = 'option';
        if (selectedIndex === idx && !isSubmitted) {
          optionClass += ' option-selected';
        }
        if (isSubmitted) {
          if (idx === selectedIndex) {
            optionClass += question.options[idx] === question.answer
              ? ' option-correct'
              : ' option-incorrect';
          } else if (question.options[idx] === question.answer) {
            optionClass += ' option-correct';
          } else {
            optionClass += ' option';
          }
        }
        return (
          <QuizOption
            key={idx}
            question={question}
            optionIndex={idx}
            onOptionClick={() => handleOptionClick(idx)}
            isSelected={selectedIndex === idx}
            optionClass={optionClass}
          />
        );
      })}
    </>
  );
}

export default FourOptions;