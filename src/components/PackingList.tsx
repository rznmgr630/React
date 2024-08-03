type Props = {
  items: { id: number, description: string, quantity: number, packed: boolean }[]
}

function PackingList({ items }: Props) {
  return (
    <div className="list">
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
              <button style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold' }}>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PackingList;