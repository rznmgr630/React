import { useState } from 'react';
import './index.css';

function App() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const getDateInfo = () => {
    const date = new Date();
    if (count === 0)
      return 'Today is ' + date.toDateString()
    else if (count < 0)
      return count + ' days ago was ' + new Date(date.setDate(date.getDate() + count)).toDateString()
    else
      return count + ' days from today is ' + new Date(date.setDate(date.getDate() + count)).toDateString()
  }

  return (
    <div className='container'>
      <div>
        <button onClick={() => setStep(prev => prev - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(prev => prev + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(prev => prev - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + step)}>+</button>
      </div>

      <div>
        <p>{getDateInfo()} </p>
      </div>
    </div>
  )
}

export default App
