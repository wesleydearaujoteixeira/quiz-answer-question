
import { useState } from 'react';
import './styles/App.css';
import './styles/responsive.css';

import { questions_answers} from './questions/quetions';
import { LoadInfo } from './components/LoadInfo';


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [initial, setInitial] = useState(false);
  const [lock, setLock] = useState(false);
  const [loadImage, setLoadImage] = useState(false);

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');



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

              setImage(questions_answers[currentIndex].image);
              setTitle(questions_answers[currentIndex].description);
    
              setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                item.classList.remove('correct');
                setLoadImage(false);
                setLock(false);
              }, 7000);
          }
          
        else {
          item?.classList.add('incorrect');
          setLock(true);
          alert(" Você errou! ");
  
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            item?.classList.remove('incorrect');
            setLock(false);
          }, 2000);
        
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
              <LoadInfo img={image} text={title} />
            )}

          <section className={initial == true? 'container' : 'default'}>

            {initial && (
              currentQA.questions.map((item, index) => (
                <h1 key={index} id={String(index)} onClick={() => VerifyCondition(index)}>
                  {item}
                </h1>
              )))}

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
