import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Andez</h1>
      <p className="tagline">My first app project!</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
      <p className="hint">
        Edit <code>src/App.tsx</code> and save to see your changes.
      </p>
    </main>
  )
}
