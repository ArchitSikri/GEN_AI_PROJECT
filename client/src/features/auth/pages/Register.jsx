import { useState } from 'react'
import { ArrowUpRight, Eye, EyeOff, Sparkles } from 'lucide-react'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import LockPasswordLineIcon from 'remixicon-react/LockPasswordLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

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
        aria-labelledby="register-title"
        className="grid w-full max-w-[1040px] overflow-hidden rounded-[28px] border border-white/20 bg-black/35 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="flex min-h-[220px] flex-col justify-between border-b border-white/10 p-6 sm:p-9 md:min-h-[640px] md:border-b-0 md:border-r md:p-12">
          <a
            className="inline-flex w-fit items-center gap-3 text-sm font-bold tracking-[0.22em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300"
            href="/"
            aria-label="Home"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-red-200">
              <Sparkles size={19} aria-hidden="true" />
            </span>
            <span>GENAI</span>
          </a>

          <div className="mt-10 max-w-lg md:mt-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200/25 bg-red-950/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-red-100/90">
              <span className="size-1.5 animate-pulse rounded-full bg-red-400" />
              YOUR STORY STARTS HERE
            </span>
            <h1 className="mt-5 max-w-md text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl md:text-[56px]">
              Step into
              <span className="mt-1 block text-red-200">something new.</span>
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70 sm:text-base">
              Create an account and bring your next big idea to life.
            </p>
          </div>

          <div className="mt-8 hidden items-center gap-2 text-xs tracking-wide text-white/50 md:flex">
            <Sparkles size={14} aria-hidden="true" />
            A little space for big ideas.
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-9 md:p-12">
          <div className="w-full max-w-[390px]">
            <div className="mb-8">
              <span className="text-[10px] font-bold tracking-[0.22em] text-red-200/85">
                GET STARTED
              </span>
              <h2
                id="register-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white"
              >
                Create your account
              </h2>
              <p className="mt-2 text-sm text-white/55">
                Enter your details to join the experience.
              </p>
            </div>

            <form
              className="grid gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/80" htmlFor="username">
                  Username
                </label>
                <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 transition focus-within:border-red-200/60 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-red-300/15">
                  <UserLineIcon
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-white/45"
                  />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    autoComplete="username"
                    required
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/80" htmlFor="email">
                  Email address
                </label>
                <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 transition focus-within:border-red-200/60 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-red-300/15">
                  <MailLineIcon
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-white/45"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/80" htmlFor="password">
                  Password
                </label>
                <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 transition focus-within:border-red-200/60 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-red-300/15">
                  <LockPasswordLineIcon
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-white/45"
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
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
              >
                Create account
                <ArrowRightLineIcon
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-7 text-center text-xs text-white/55">
              Already have an account?{' '}
              <a
                className="font-semibold text-red-200 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
                href="/login"
              >
                Log in
                <ArrowUpRight className="ml-0.5 inline-block" size={13} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
