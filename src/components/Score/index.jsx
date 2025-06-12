import ProgressBar from "../ProgressBar";
import ThemeSwitcher from "../ThemeSwitcher";


function Score({title,icon, score, onRestart}){


    return (
         <div className="score-page">
          
           <header className='app-header'>
            <div className="quiz-header-left">
              <img src={icon} alt="subject-icon"/>
              <h2>{title}</h2>
            </div>
            <ThemeSwitcher />
           </header>
           <main> 
             <section className="section-left">
                 <h2>Quiz Completed</h2>
                 <h3>You scored...</h3>
              </section>
            <section className="section-right"> 
              <div className="score-content">
                  <div className="quiz-header-center">
                    <img src={icon} alt="subject-icon"/>
                    <h2>{title}</h2>
                  </div>
                  <div className="score-table">
                      <h4>{score}</h4>    
                      <p>out of 10</p>
                  </div>
              </div>
              <button onClick={onRestart}>Restart Quiz</button>
            </section>
            
           </main>
         </div>
    )
}

export default Score;