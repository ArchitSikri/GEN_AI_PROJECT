import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Home from './features/auth/pages/Home'
import Interview from './features/ai/pages/interview'
import MyProfile from './features/ai/pages/MyProfile'
import Protected from "./features/auth/components/Protected"
import { InterviewProvider } from './features/ai/context/interview.provider'

const InterviewRoute = () => (
  <Protected>
    <InterviewProvider>
      <Interview />
    </InterviewProvider>
  </Protected>
)

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<InterviewRoute />} />
      <Route path="/interview/:interviewId" element={<InterviewRoute />} />
      <Route path="/profile" element={<Protected><MyProfile /></Protected>} />
    </Routes>
  )
}

export default App
