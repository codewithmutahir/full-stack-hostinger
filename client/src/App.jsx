import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    console.log('API URL:', apiUrl); // Debug log
    fetch(`${apiUrl}/api/message`)
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
