import { ChangeEvent, useState } from "react";

type Props = {
  addItem: (data: { id: number, quantity: number, description: string, packed: boolean }) => void
}

function Form({ addItem }: Props) {
  const [datas, setDatas] = useState({
    quantity: 1,
    description: '',
  })
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { quantity, description } = datas;

    if (!description) return;

    const data = {
      id: Date.now(),
      quantity,
      description,
      packed: false
    }

    addItem(data);
    setDatas({ quantity: 1, description: '' })
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select
        value={datas.quantity}
        onChange={(e) => setDatas(prev => ({ ...prev, quantity: +e.target.value }))}
      >
        {
          Array.from({ length: 20 }, (_, i) => i + 1)
            .map(value => (
              <option key={value} value={value}>{value}</option>
            ))
        }
      </select>
      <input type="text" placeholder="item" value={datas.description} onChange={(e) => setDatas((prev) => ({ ...prev, description: e.target.value }))} />
      <button>Add</button>
    </form>
  )
}

export default Form;