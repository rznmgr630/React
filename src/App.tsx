import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import './index.css'

type ItemTypes = {
  id: number,
  quantity: number,
  description: string,
  packed: boolean
}

function App() {
  const [items, setItems] = useState<ItemTypes[]>([
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Laptop', quantity: 1, packed: false }
  ]);

  const handleAdd = (datas: ItemTypes) => setItems(prev => ([...prev, datas]))

  const packedItems = items.filter((value) => value.packed).length

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAdd} />
      <PackingList items={items} />
      <Stats total={items.length} completedPercentage={(packedItems / items.length) * 100} />
    </div>
  )
}

export default App;