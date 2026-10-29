import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, BriefcaseBusiness, FileText, Sparkles, Upload, UserRound } from 'lucide-react'
import { useInterview } from '../hooks/useInterview'

const Interview = () => {
  const { loading, error, report, reports, generateReport } = useInterview()
  const [jobDescription, setJobDescription] = useState('')
  const [selfDescription, setSelfDescription] = useState('')
  const [formError, setFormError] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const resumeInputRef = useRef(null)
  const navigate = useNavigate()
  const { interviewId } = useParams()

  const handleGenerateReport = async (event) => {
    event.preventDefault()
    setFormError('')

    const selectedResume = resumeInputRef.current?.files?.[0]
    if (!jobDescription.trim()) {
      setFormError('Add the target job description to continue.')
      return
    }

    if (!selectedResume && !selfDescription.trim()) {
      setFormError('Upload a PDF resume or add a self-description.')
      return
    }

    if (selectedResume && selectedResume.size > 5 * 1024 * 1024) {
      setFormError('The resume must be 5 MB or smaller.')
      return
    }

    try {
      const generatedReport = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile: selectedResume,
      })
      navigate(`/interview/${generatedReport._id}`)
    } catch (generateError) {
      setFormError(generateError.message || 'Unable to generate your interview plan.')
    }
  }

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center px-4 text-white">
        <p role="status" className="text-sm text-white/70">
          Loading your interview plan...
        </p>
      </main>
    )
  }

  if (interviewId && report) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 text-white sm:px-6">
        <Link
          to="/main"
          className="inline-flex items-center gap-2 text-sm text-sky-200 no-underline hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to interview plans
        </Link>
        <section className="mt-6 rounded-3xl border border-white/15 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-xl sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Interview strategy
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            {report.title || 'Your interview plan'}
          </h1>
          <p className="mt-2 text-sm text-white/55">
            Match score: {report.matchScore ?? '—'}%
          </p>

          <div className="mt-8 grid gap-8">
            {[
              ['Technical questions', report.technicalQuestions],
              ['Behavioral questions', report.behavioralQuestions],
            ].map(([heading, questions]) => (
              <section key={heading}>
                <h2 className="text-xl font-semibold">{heading}</h2>
                <div className="mt-4 grid gap-3">
                  {(questions || []).map((item, index) => (
                    <article
                      key={`${heading}-${index}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <h3 className="font-medium">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        <strong className="text-white/80">What they assess:</strong>{' '}
                        {item.intention}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        <strong className="text-white/80">How to answer:</strong>{' '}
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold">Skills to strengthen</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {(report.skillGaps || []).map((gap, index) => (
                  <li
                    key={`${gap.skill}-${index}`}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm"
                  >
                    <span className="font-medium">{gap.skill}</span>
                    <span className="ml-2 text-white/50">({gap.severity} priority)</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Preparation plan</h2>
              <ol className="mt-3 grid gap-3 sm:grid-cols-2">
                {(report.preparationPlan || []).map((day) => (
                  <li
                    key={day.day}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <h3 className="font-medium">Day {day.day}: {day.focus}</h3>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-white/60">
                      {(day.tasks || []).map((task) => <li key={task}>{task}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </section>
      </main>
    )
  }

  if (interviewId && error) {
    return (
      <main className="grid min-h-screen place-items-center px-4 text-white">
        <section className="rounded-2xl border border-white/15 bg-slate-950/60 p-6 text-center">
          <h1 className="text-xl font-semibold">Could not load this interview plan</h1>
          <p role="alert" className="mt-2 text-sm text-rose-200">{error.message}</p>
          <Link to="/main" className="mt-5 inline-block text-sm text-sky-200">
            Return to interview plans
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-8 text-white sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-300/[0.07] px-3 py-1.5 text-xs font-semibold tracking-[0.15em] text-sky-100">
            <Sparkles size={14} aria-hidden="true" />
            PERSONALIZED PREPARATION
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Create your custom <span className="text-sky-200">interview plan</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
            Share the job requirements and your experience to build a focused interview strategy.
          </p>
        </header>

        <form
          onSubmit={handleGenerateReport}
          className="grid overflow-hidden rounded-3xl border border-white/15 bg-slate-950/60 shadow-2xl backdrop-blur-xl lg:grid-cols-2"
        >
          <section className="p-5 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-sky-200/20 bg-sky-300/10 text-sky-200">
                <BriefcaseBusiness size={19} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-semibold">Target job description</h2>
                <p className="mt-1 text-xs text-white/45">Required</p>
              </div>
            </div>
            <label className="sr-only" htmlFor="jobDescription">Job description</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              className="min-h-64 w-full resize-y rounded-xl border border-white/15 bg-white/[0.05] p-4 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-sky-200/50 focus:ring-2 focus:ring-sky-300/15"
              placeholder="Paste the full job description here..."
              maxLength={5000}
              required
            />
            <p className="mt-2 text-right text-xs text-white/40">
              {jobDescription.length} / 5000 chars
            </p>
          </section>

          <section className="border-t border-white/10 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-sky-200/20 bg-sky-300/10 text-sky-200">
                <UserRound size={19} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-semibold">Your profile</h2>
                <p className="mt-1 text-xs text-white/45">A resume or self-description is required</p>
              </div>
            </div>

            <label
              htmlFor="resume"
              className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-sky-100/25 bg-sky-300/[0.04] p-4 text-center transition hover:border-sky-200/50 hover:bg-sky-300/[0.08]"
            >
              <Upload size={23} aria-hidden="true" className="text-sky-200" />
              <span className="mt-2 text-sm font-medium">Upload your resume</span>
              <span className="mt-1 text-xs text-white/45">PDF only, maximum 5 MB</span>
              <input
                ref={resumeInputRef}
                id="resume"
                name="resume"
                type="file"
                accept="application/pdf,.pdf"
                className="sr-only"
                onChange={(event) => setResumeFile(event.target.files?.[0] || null)}
              />
            </label>
            {resumeFile && (
              <p className="mt-2 flex items-center gap-2 text-xs text-white/65">
                <FileText size={14} aria-hidden="true" />
                {resumeFile.name}
              </p>
            )}

            <div className="my-5 flex items-center gap-3 text-xs text-white/35">
              <span className="h-px flex-1 bg-white/10" />
              OR
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <label htmlFor="selfDescription" className="mb-2 block text-sm font-medium text-white/80">
              Quick self-description
            </label>
            <textarea
              id="selfDescription"
              name="selfDescription"
              value={selfDescription}
              onChange={(event) => setSelfDescription(event.target.value)}
              className="min-h-28 w-full resize-y rounded-xl border border-white/15 bg-white/[0.05] p-4 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-sky-200/50 focus:ring-2 focus:ring-sky-300/15"
              placeholder="Describe your experience, key skills, and years of experience..."
            />
          </section>

          <div className="border-t border-white/10 p-5 sm:px-8 sm:py-5 lg:col-span-2">
            {formError && (
              <p role="alert" className="mb-4 text-sm text-rose-200">{formError}</p>
            )}
            {error && !interviewId && (
              <p role="alert" className="mb-4 text-sm text-rose-200">{error.message}</p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/40">AI-powered strategy generation · Approx. 30 seconds</p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-200/35 bg-[#1766a8]/90 px-5 text-sm font-semibold text-white transition hover:bg-[#2479bd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Sparkles size={16} aria-hidden="true" />
                {loading ? 'Generating your strategy...' : 'Generate my interview strategy'}
              </button>
            </div>
          </div>
        </form>

        {reports.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">My recent interview plans</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((item) => (
                <li key={item._id}>
                  <Link
                    to={`/interview/${item._id}`}
                    className="block h-full rounded-2xl border border-white/15 bg-slate-950/50 p-4 text-white no-underline transition hover:border-sky-200/35 hover:bg-slate-950/70"
                  >
                    <h3 className="font-medium">{item.title || 'Untitled position'}</h3>
                    <p className="mt-2 text-xs text-white/45">
                      Generated on {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    <p className="mt-3 text-sm text-sky-200">
                      Match score: {item.matchScore ?? '—'}%
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-10 flex justify-center gap-6 text-xs text-white/40">
          <a href="#privacy" className="hover:text-white/70">Privacy Policy</a>
          <a href="#terms" className="hover:text-white/70">Terms of Service</a>
          <a href="#help" className="hover:text-white/70">Help Center</a>
        </footer>
      </div>
    </main>
  )
}

export default Interview
