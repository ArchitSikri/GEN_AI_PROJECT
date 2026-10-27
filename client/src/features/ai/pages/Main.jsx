import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  FileText,
  Sparkles,
  Upload,
  UserRound,
} from 'lucide-react'

const Main = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent px-4 py-5 text-white sm:px-6 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,130,190,0.2),transparent_55%)]"
      />

      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-6xl flex-col sm:min-h-[calc(100vh-4rem)]">
        <header className="flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/30 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-white/20 bg-white/10 text-sky-200">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            GENAI
          </a>
          <span className="hidden items-center gap-2 text-xs font-medium text-white/55 sm:inline-flex">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
            Interview workspace
          </span>
        </header>

        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 lg:py-14">
          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/25 bg-slate-950/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-sky-100/90 backdrop-blur-md sm:text-xs">
                <Sparkles size={13} aria-hidden="true" />
                YOUR NEXT OPPORTUNITY
              </span>
              <h1 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                Get interview-ready.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Share a little about the role and your experience. We&apos;ll
                prepare a focused interview report just for you.
              </p>
            </div>

            <form className="rounded-[28px] border border-white/20 bg-slate-950/55 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8">
              <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-sky-200/20 bg-sky-300/10 text-sky-200">
                  <BriefcaseBusiness size={19} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Tell us about the opportunity
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Add the role details and your background to get started.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label
                    className="flex items-center justify-between text-xs font-medium text-white/80"
                    htmlFor="title"
                  >
                    Job title <span className="text-sky-200/70">Required</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="min-h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-sky-200/60 focus:bg-white/[0.09] focus:ring-2 focus:ring-sky-300/15"
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="flex items-center justify-between text-xs font-medium text-white/80"
                    htmlFor="jobDescription"
                  >
                    Job description <span className="text-sky-200/70">Required</span>
                  </label>
                  <textarea
                    id="jobDescription"
                    name="jobDescription"
                    rows="5"
                    placeholder="Paste the job description here. Include the responsibilities, requirements, and skills listed for the role..."
                    className="min-h-36 w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-sky-200/60 focus:bg-white/[0.09] focus:ring-2 focus:ring-sky-300/15"
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="flex items-center justify-between text-xs font-medium text-white/80"
                    htmlFor="resume"
                  >
                    Resume <span className="text-white/40">PDF format</span>
                  </label>
                  <label
                    htmlFor="resume"
                    className="group flex min-h-[76px] cursor-pointer items-center gap-4 rounded-xl border border-dashed border-sky-100/25 bg-sky-300/[0.04] px-4 py-3 transition hover:border-sky-200/50 hover:bg-sky-300/[0.08] focus-within:ring-2 focus-within:ring-sky-300/20"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.07] text-sky-200 transition group-hover:bg-white/10">
                      <Upload size={19} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-white/85">
                        Choose your resume
                      </span>
                      <span className="mt-1 block text-xs text-white/45">
                        Upload a PDF file
                      </span>
                    </span>
                    <FileText
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-white/35"
                    />
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept="application/pdf,.pdf"
                      className="sr-only"
                    />
                  </label>
                </div>

                <div className="grid gap-2">
                  <label
                    className="flex items-center justify-between text-xs font-medium text-white/80"
                    htmlFor="selfDescription"
                  >
                    Self description <span className="text-white/40">Optional</span>
                  </label>
                  <div className="relative">
                    <UserRound
                      size={17}
                      aria-hidden="true"
                      className="absolute left-4 top-4 text-white/40"
                    />
                    <textarea
                      id="selfDescription"
                      name="selfDescription"
                      rows="3"
                      placeholder="Describe yourself in a few sentences. What are your strengths, experience, and career goals?"
                      className="min-h-28 w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] py-3 pl-11 pr-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-sky-200/60 focus:bg-white/[0.09] focus:ring-2 focus:ring-sky-300/15"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="group mt-1 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-sky-200/35 bg-[#1766a8]/90 px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(23,102,168,0.25)] transition hover:border-sky-100/60 hover:bg-[#2479bd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                >
                  <Sparkles size={17} aria-hidden="true" />
                  Generate interview report
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </form>
          </div>

          <aside className="hidden lg:block">
            <div className="rounded-[24px] border border-white/15 bg-slate-950/35 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-sky-200/80">
                YOUR REPORT INCLUDES
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                A clearer path to your next interview.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Get personalized insights based on your resume and the role.
              </p>
              <ul className="mt-6 grid gap-4">
                {[
                  'Role match score',
                  'Technical and behavioral questions',
                  'Skills to strengthen',
                  'A focused preparation plan',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full border border-sky-200/20 bg-sky-300/10 text-sky-200">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-white/40">
                Your information helps shape a report that is relevant to your
                experience and the role you&apos;re targeting.
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default Main
