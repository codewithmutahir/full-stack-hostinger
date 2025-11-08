import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Use Railway server URL in production, localhost in development
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    const apiUrl = isProduction 
      ? 'https://endearing-comfort-production-a291.up.railway.app'
      : 'http://localhost:4000';
    console.log('Using API URL:', apiUrl);
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
