import { ArrowDown, ArrowRight, Compass, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'

const Home = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-7 pt-5 sm:px-8 sm:pt-7 lg:px-14">
        <header className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/25 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6">
          <Link
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300"
            to="/"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-white/20 bg-white/10 text-sky-200">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            GENAI
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3" aria-label="Main navigation">
            <Link
              className="rounded-xl px-3 py-2 text-xs font-medium text-white/75 no-underline transition hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-xl border border-sky-200/35 bg-[#1766a8]/80 px-3 py-2 text-xs font-semibold text-white no-underline transition hover:bg-[#2479bd] sm:px-4 sm:text-sm"
              to="/register"
            >
              Get started <ArrowRightLineIcon size={17} aria-hidden="true" />
            </Link>
          </nav>
        </header>

        <section className="flex flex-1 items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-black/25 px-3 py-2 text-[10px] font-semibold tracking-[0.2em] text-sky-100/90 backdrop-blur-md sm:text-xs">
              <span className="size-1.5 animate-pulse rounded-full bg-sky-300" />
              YOUR NEXT IDEA STARTS HERE
            </div>

            <h1 className="mt-7 text-[clamp(3.25rem,10vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
              Imagine
              <span className="mt-2 block text-sky-200">what&apos;s next.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A space to explore ideas, create something new, and make your next
              big thing happen.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-sky-200/40 bg-[#1766a8]/90 px-6 text-sm font-semibold text-white no-underline shadow-[0_8px_30px_rgba(23,102,168,0.3)] transition hover:border-sky-100/60 hover:bg-[#2479bd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                to="/register"
              >
                Create your account
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-slate-950/25 px-6 text-sm font-medium text-white no-underline backdrop-blur-md transition hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                to="/login"
              >
                <Compass size={17} aria-hidden="true" />
                I already have an account
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs text-white/50 sm:mt-20">
              <span className="grid size-8 place-items-center rounded-full border border-white/15 bg-black/20">
                <ArrowDown size={14} aria-hidden="true" />
              </span>
              Start with an idea. See where it takes you.
            </div>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-white/15 pt-5 text-[10px] tracking-[0.16em] text-white/45 sm:text-xs">
          <span>MAKE SOMETHING MEANINGFUL</span>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Sparkles size={13} aria-hidden="true" />
            GENAI
          </span>
        </footer>
      </div>
    </main>
  )
}

export default Home
