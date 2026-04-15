import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    api.get('/api/status')
      .then(response => setMessage("Conexão com o back-end realizada com sucesso"))
      .catch(() => setMessage('AAAAAAAAAAAA'))
  }, [])

  return (
    <div className="App">
      <h1>Projeto Front-End + Spring Boot</h1>
      <p>Status do backend: {message || 'Carregando...'}</p>
    </div>
  )
}

export default App
