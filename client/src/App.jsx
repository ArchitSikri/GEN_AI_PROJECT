import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Home from './features/auth/pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
