import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/api/message')
    .then(res => res.json())
    .then((data) => setMessage(data.message))
    .catch(err => {
      console.error('Error fetching message:', err)
      setMessage('Error fetching message')
    })
  }, [])

  return (
    <>
      <h1>Hello from client</h1>
       <p>{message}</p>
    </>
  )
}

export default App
