import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Home from './features/auth/pages/Home'
import Main from './features/ai/pages/Main'
import Protected from "./features/auth/components/Protected"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Protected><Main /></Protected>} />
    </Routes>
  )
}

export default App
