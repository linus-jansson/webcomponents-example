import { useState } from 'react'
import { NTIButton } from './components/buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>ReactNTIButton</h1>
        <h2>Count: {count}</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <NTIButton onClick={() => setCount(prevCount => prevCount + 1)}>
                NTI Button Default
            </NTIButton>
            <NTIButton size="small" onClick={() => setCount(prevCount => prevCount + 1)}>
                NTI Button small
            </NTIButton>
            <NTIButton size="large" onClick={() => setCount(prevCount => prevCount + 1)}>
                NTI Button large
            </NTIButton>
        </div>
    </>
  )
}

export default App
