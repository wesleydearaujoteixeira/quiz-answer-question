
import { useState } from 'react'
import './App.css'
import { questions_answers} from './questions/quetions'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [initial, setInitial] = useState(false);
  const [lock, setLock] = useState(false);



  const VerifyCondition = (index: number) => {
      
      if(currentIndex < questions_answers.length) {


        const item = document.getElementById(String(index));
  
        document.getElementById(String(index))
  
        const current = questions_answers[currentIndex].currect
  
        if(lock == false) {
            if(current === index && item) {
      
              item.classList.add('correct');
              setLock(true);
    
              setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                item.classList.remove('correct');
                setLock(false);
              }, 5000);
      
          }
          
  
        else {
          item?.classList.add('incorrect');
          setLock(true);

  
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            item?.classList.remove('incorrect');
            setLock(false);
          }, 5000);
        
        }

        }

       
  
      }else {
        setCurrentIndex(0);
      }
  
    


   
  }

  const handleState = () => {
    setCurrentIndex(0);
    setInitial(true);
  }

  const currentQA = questions_answers[currentIndex];

  return (
    <div className='main'>

      {currentQA  && initial ? (

        <>
          <h1>{currentQA.title}</h1>

            <h1> {currentIndex + 1} / {questions_answers.length} </h1>

          <section className={initial == true? 'container' : 'default'}>

            {initial && (
              currentQA.questions.map((item, index) => (
                <h1 key={index} id={String(index)} onClick={() => VerifyCondition(index)}>
                  {item}
                </h1>
              ))

            )}

          </section>
        </>
      ) : (
        <div>
          <button onClick={() => handleState()} > Iniciar o Quiz? </button>
        </div>
      )}
    </div>
  );
}

export default App
