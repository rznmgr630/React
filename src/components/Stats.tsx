type Props = {
  total: number,
  completedPercentage: number
}

function Stats({ total, completedPercentage }: Props) {
  return (
    <footer className="stats">
      <em>You have {total} items in your list, and you already packed {completedPercentage}%</em>
    </footer>
  )
}

export default Stats;