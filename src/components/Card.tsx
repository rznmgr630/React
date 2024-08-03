type CardType = {
  id: number;
  question: string;
  answer: string;
  show: boolean;
  setShow: (id: number) => void;
}

function Card({ id, question, answer, show, setShow }: CardType) {
  return (
    <div
      className="card" style={show ? { backgroundColor: '#d92c2a', color: '#fff' } : { backgroundColor: '#f7f7f6' }}
      onClick={() => setShow(id)}
    >
      {show ? answer : question}
    </div >
  )
}

export default Card;