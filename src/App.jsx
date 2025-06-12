

import { useState, useEffect } from 'react'


import htmlIcon from './assets/images/icon-html.svg' ;
import cssIcon from './assets/images/icon-css.svg';
import javascriptIcon from './assets/images/icon-js.svg'; 
import accessibilityIcon from './assets/images/icon-accessibility.svg';

import Subject from './components/Subject'
import QuizPage from './components/QuizPage'

import ThemeSwitcher from './components/ThemeSwitcher';

import './assets/styles/main.scss'

function App() {

  const [quizzes, setQuizzes] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [subjectIndex, setSubjectIndex] = useState(null);


  const subjects = [
  { title: "HTML", icon: htmlIcon },
  { title: "CSS", icon: cssIcon },
  { title: "JavaScript", icon: javascriptIcon },
  { title: "Accessibility", icon: accessibilityIcon },
];

  useEffect(() => {
   fetch('./json/data.json')
    .then(response => response.json())
    .then(data => {
      setQuizzes(data.quizzes);
    })
    .catch(error => console.error('Error fetching data:', error));
    }, []);

  
  const handleSubjectSelect = ( value) => {
    
    if (value !== null) {
      setSubjectIndex(value);
      setShowQuiz(true);
     
  }}

 

return (
  <div >
    {(showQuiz && quizzes && subjectIndex !== null) ? (
      <QuizPage 
        quiz={quizzes[subjectIndex]} 
        icon={subjects[subjectIndex].icon}
        onRestart={() => {
          setShowQuiz(false);
          setSubjectIndex(null);
        }} 
      />) : !quizzes ? (
      <div>Loading...</div>
    ) : (
      <>
        <header className="app-header">
          <ThemeSwitcher /> 
        </header>
        <main className="main">
          <section className='section-left'>
            <h1>Welcome to the <br /><span>Frontend Quiz!</span></h1>
            <p>Pick a subject to get started.</p>
          </section>
          <section className="section-right">
            <div className='subject-list'>
              {subjects.map((subject, idx) => (
                  <Subject
                    key={subject.title}
                    title={subject.title}
                    icon={subject.icon}
                    onClick={() => handleSubjectSelect(idx)}
                  />
                ))}
              </div>
          </section>
        </main>
      </>
    )}
  </div>
);
}

export default App;