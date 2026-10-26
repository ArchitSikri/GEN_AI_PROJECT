import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { getMe, login, logout, register } from '../services/auth.api'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }

  const { user, setUser, loading, setLoading } = context
  const { pathname } = useLocation()

  const handleLogin = async ({ email, password }) => {
    setLoading(true)
    try {
      const data = await login({ email, password })
      setUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true)
    try {
      const data = await register({ username, email, password })
      setUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setLoading(true)
    try {
      const data = await logout()
      setUser(null)
      return data
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (pathname !== '/main') {
      setLoading(false)
      return undefined
    }

    let isMounted = true

    const getAndSetUser = async () => {
      try {
        const data = await getMe()
        if (isMounted) setUser(data.user)
      } catch (error) {
        if (isMounted) setUser(null)
        if (error.response?.status !== 401) {
          console.error('Unable to restore the current user session:', error)
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    getAndSetUser()

    return () => {
      isMounted = false
    }
  }, [pathname, setLoading, setUser])

  return { user, loading, handleRegister, handleLogin, handleLogout }
}
