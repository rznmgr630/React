import { useState } from 'react';
import Card from './components/Card';
import { quiz } from './constants/question';
import './index.css'

function App() {
  const [data, setData] = useState(quiz);

  const handleShow = (id: number) => {
    const updatedData = data.map(d => ({ ...d, show: d.id === id }))
    setData(updatedData)
  }

  return (
    <div className="container">
      {
        data.map(q => (
          <Card id={q.id} question={q.question} answer={q.answer} show={q.show} setShow={handleShow} key={q.id} />
        ))
      }
    </div>
  )
}

export default App;