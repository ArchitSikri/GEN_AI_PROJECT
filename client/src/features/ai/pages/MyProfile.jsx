import { ArrowLeft, Mail, Sparkles, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

const MyProfile = () => {
  const { user } = useAuth()
  const initials = user?.username?.trim()?.charAt(0)?.toUpperCase() || 'U'

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent px-4 py-5 text-white sm:px-6 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,130,190,0.2),transparent_55%)]"
      />

      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-6xl flex-col sm:min-h-[calc(100vh-4rem)]">
        <header className="flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/30 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6">
          <Link
            to="/main"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-white/20 bg-white/10 text-sky-200">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            GENAI
          </Link>
          <Link
            to="/main"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-3 text-xs font-semibold text-white/85 no-underline transition hover:bg-white/[0.12] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 sm:px-4 sm:text-sm"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to workspace
          </Link>
        </header>

        <section className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-xl overflow-hidden rounded-[28px] border border-white/20 bg-slate-950/55 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
            <div className="border-b border-white/10 px-6 py-7 sm:px-9 sm:py-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-sky-300/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-sky-100/90 sm:text-xs">
                <UserRound size={13} aria-hidden="true" />
                ACCOUNT PROFILE
              </span>
              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                My profile
              </h1>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Your account details for your interview workspace.
              </p>
            </div>

            <div className="px-6 py-7 sm:px-9 sm:py-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl border border-sky-200/25 bg-gradient-to-br from-sky-300/20 to-blue-500/10 text-2xl font-semibold text-sky-100 shadow-inner">
                  {initials}
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-white">
                    {user?.username || 'Your account'}
                  </p>
                  <p className="mt-1 truncate text-sm text-white/50">
                    {user?.email || 'Account details'}
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-white/45">
                    <UserRound size={15} aria-hidden="true" />
                    Username
                  </dt>
                  <dd className="mt-2 break-all text-sm font-medium text-white/90">
                    {user?.username || '—'}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-white/45">
                    <Mail size={15} aria-hidden="true" />
                    Email address
                  </dt>
                  <dd className="mt-2 break-all text-sm font-medium text-white/90">
                    {user?.email || '—'}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl border border-sky-200/15 bg-sky-300/[0.05] p-4 text-sm leading-6 text-white/60">
                Your profile details are retrieved securely from your signed-in
                account.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MyProfile
