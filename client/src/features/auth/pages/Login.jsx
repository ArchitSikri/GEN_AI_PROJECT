import { useState } from 'react'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import LockPasswordLineIcon from 'remixicon-react/LockPasswordLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    try {
      await handleLogin({ email, password })
      navigate('/main')
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Unable to sign in. Please try again.',
      )
    }
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#08090d] px-4 py-8 text-white sm:px-6">
      <img
        src="https://wallpapercave.com/wp/wp12407282.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(4,5,10,0.76),rgba(11,5,12,0.48)_48%,rgba(4,5,10,0.78))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(190,25,44,0.2),transparent_58%)]" />

      <section
        aria-labelledby="login-title"
        className="w-full max-w-[480px] rounded-[28px] border border-white/20 bg-black/40 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.22em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300"
        >
          <span className="grid size-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-red-200">
            <Sparkles size={19} aria-hidden="true" />
          </span>
          GENAI
        </Link>

        <div className="mb-8 mt-10">
          <span className="text-[10px] font-bold tracking-[0.22em] text-red-200/85">
            WELCOME BACK
          </span>
          <h1
            id="login-title"
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white"
          >
            Good to see you again.
          </h1>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Sign in to pick up where your next big idea begins.
          </p>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit}>
          {errorMessage && (
            <p
              className="rounded-xl border border-red-300/25 bg-red-950/40 px-4 py-3 text-sm text-red-100"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          <div className="grid gap-2">
            <label className="text-xs font-medium text-white/80" htmlFor="email">
              Email address
            </label>
            <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 transition focus-within:border-red-200/60 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-red-300/15">
              <MailLineIcon size={19} aria-hidden="true" className="shrink-0 text-white/45" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-white/80" htmlFor="password">
              Password
            </label>
            <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 transition focus-within:border-red-200/60 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-red-300/15">
              <LockPasswordLineIcon size={19} aria-hidden="true" className="shrink-0 text-white/45" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                className="grid size-8 shrink-0 place-items-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff size={17} aria-hidden="true" />
                ) : (
                  <Eye size={17} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <button
            className="group mt-2 flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-red-200/35 bg-[#9e1e2d]/90 px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(158,30,45,0.25)] transition hover:border-red-100/60 hover:bg-[#b52535] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign in'}
            <ArrowRightLineIcon
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        <p className="mt-7 text-center text-xs text-white/55">
          New here?{' '}
          <Link
            className="font-semibold text-red-200 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
            to="/register"
          >
            Create an account
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login
