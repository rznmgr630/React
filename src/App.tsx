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
  const [items, setItems] = useState<ItemTypes[]>([]);

  const handleAdd = (datas: ItemTypes) => setItems(prev => ([...prev, datas]))

  const packedItems = items.filter((value) => value.packed).length

  const handleDelete = (id: number) => {
    const updatedItems = items.filter((value) => value.id !== id)
    setItems(updatedItems)
  }

  const handlePacked = (id: number) => {
    const updatedItems = items.map((value) => value.id === id ? ({ ...value, packed: !value.packed }) : value)
    setItems(updatedItems)
  }

  const sortData = (value: string) => {
    let updatedItems: ItemTypes[];
    switch (value) {
      case 'input':
        updatedItems = items;
        break
      case 'description':
        updatedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
        break;
      default:
        updatedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed))
        break;
    }
    setItems(updatedItems)
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAdd} />
      <PackingList items={items} handleDelete={handleDelete} handlePacked={handlePacked} sortData={sortData} />
      <Stats total={items.length} completedPercentage={(packedItems / items.length) * 100} />
    </div>
  )
}

export default App;