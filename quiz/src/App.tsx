
import { useState } from 'react'
import './App.css'
import { questios_answers} from './questions/quetions'

function App() {


  const [currentIndex, setCurrentIndex] = useState(0);


  const theNextQuestion = () => {

    if(questios_answers.length > currentIndex && currentIndex === questios_answers.length - 2){
      setCurrentIndex(0);
    }
    else {
      setCurrentIndex(currentIndex + 1);
    }

    console.log('length: ', questios_answers.length);
    console.log('currentIndex: ', currentIndex);
  
  
  }; 

  return (
    <>
      <div className='main'>

      <h1>{questios_answers[currentIndex].title}</h1>

        <section className='container'>
          {questios_answers[currentIndex].questions.map((item) => {
            return (
                <h1> {item} </h1>
            );
          })}
          <div><button onClick={() => theNextQuestion()}> Próximo </button></div>
        </section>
      </div>
    </>
  )
}

export default App
