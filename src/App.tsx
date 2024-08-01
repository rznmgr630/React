import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    setAdvice(data.slip.advice);
    setCount((pre) => pre + 1);
    setLoading(false)
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <h4>{advice}</h4>
      <button onClick={handleClick} disabled={loading}>Read Advice</button>
      <p>You have read {count} advices.</p>
    </div>
  );
}

export default App;
