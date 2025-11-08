import { useState, useEffect } from 'react'
import { API_URL } from './config.js'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log('Using API URL:', API_URL);
    fetch(`${API_URL}/api/message`)
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
