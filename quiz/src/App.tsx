
import { useState } from 'react'
import './App.css'
import { questions_answers} from './questions/quetions'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [initial, setInitial] = useState(false);
  const [lock, setLock] = useState(false);
  const [loadImage, setLoadImage] = useState(false);



  const VerifyCondition = (index: number) => {
      
      if(currentIndex < questions_answers.length) {


        const item = document.getElementById(String(index));
  
        document.getElementById(String(index))
  
        const current = questions_answers[currentIndex].currect
  
        if(lock == false) {
            if(current === index && item) {
      
              item.classList.add('correct');
              setLoadImage(true);
              setLock(true);
    
              setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                item.classList.remove('correct');
                setLoadImage(false);
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
          <div className='TitleQuery'>
              <h1>{currentQA.title}</h1>
              <h1> {currentIndex + 1} / {questions_answers.length} </h1>
          </div>

            {loadImage && (
              <img  className='Image_Bruna' src="https://planetsex.com.br/Img/conteudo/cenas/cena_selecionada/fotos/bruna-surfistinha-transando-de-verdade_926_5.jpg" alt="" />
            )}

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
