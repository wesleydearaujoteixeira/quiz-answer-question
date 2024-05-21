
import { useState } from 'react'
import './App.css'
import { questios_answers} from './questions/quetions'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);


  const [correct, setCorrect] = useState('');


  const theNextQuestion = () => {

    if(questios_answers.length > currentIndex && currentIndex === questios_answers.length - 2){
      setCurrentIndex(0);
    }
    else {
      setCurrentIndex(currentIndex + 1);
    }
    


  };
  
  const getNumber = (n: number) => n;

  const VerifyCondition = (e: React.MouseEvent <HTMLDivElement>, num: number, index: number) => {

    if(num === index) {
      console.log(e.currentTarget.classList.add('correct'));
    }else {
      alert('não acertou');
    }

    

  }



  return (
    <>
      <div className='main'>

      <h1>{questios_answers[currentIndex].title}</h1>

        <section className='container'>
          {questios_answers[currentIndex].questions.map((item, index) => {

            const numero = questios_answers[currentIndex].currect
            
            getNumber(numero);

            getNumber(numero);
            console.log(numero)
            return <h1 className={correct} onClick={(e) => VerifyCondition(e, numero, index)} > {item} </h1>
            
          })}
          <div><button onClick={() => theNextQuestion()}> Próximo </button></div>
        </section>
      </div>
    </>
  )
}

export default App
