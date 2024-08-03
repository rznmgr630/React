import { useState } from 'react';
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className='container'>
      <div className='steps'>
        <div className={`step-item ${currentStep >= 1 && 'active'}`}>1</div>
        <div className={`step-item ${currentStep >= 2 && 'active'}`}>2</div>
        <div className={`step-item ${currentStep >= 3 && 'active'}`}>3</div>
      </div>

      <div className='information'>
        {
          currentStep === 1 ? (
            <div>Learn React JS</div>
          ) : currentStep === 2 ? (
            <div>Build some cool projects.</div>
          )
            : (
              <div>Earn great money.</div>
            )
        }
      </div>

      <div className='buttons'>
        <button
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(prev => prev - 1)}
        >
          Previous
        </button>

        <button
          disabled={currentStep === 3}
          onClick={() => setCurrentStep(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
