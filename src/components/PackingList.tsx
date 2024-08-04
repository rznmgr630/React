type Props = {
  items: { id: number, description: string, quantity: number, packed: boolean }[]
  handleDelete: (id: number) => void
  handlePacked: (id: number) => void
  sortData: (value: string) => void
}

function PackingList({ items, handleDelete, handlePacked, sortData }: Props) {
  return (
    <div className="list">
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              <input type="checkbox" value={item.packed.toString()} onChange={() => handlePacked(item.id)} />
              <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
              <button style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold' }} onClick={() => handleDelete(item.id)}> ⚔️ </button>
            </li>
          ))
        }
      </ul>
      <div>
        <select name="actions" onChange={(e) => sortData(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  )
}

export default PackingList;