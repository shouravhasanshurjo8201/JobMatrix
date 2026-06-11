import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-black">

      {/* Background Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container mx-auto px-6 py-20">

        <div className="mx-auto max-w-6xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 backdrop-blur-md">
            ✨ AI-Powered Recruitment Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Find Your
            <span className="block bg-linear-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Dream Tech Job
            </span>
            Faster with AI
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            JobMatrix AI intelligently analyzes resumes,
            matches candidates with the right opportunities,
            and helps recruiters discover top talent faster
            than ever before.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/register"
              className="rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              🚀 Get Started
            </Link>

            <Link
              href="/jobs"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Browse Jobs
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold text-white">
                10K+
              </h3>
              <p className="mt-2 text-slate-400">
                Active Candidates
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold text-white">
                500+
              </h3>
              <p className="mt-2 text-slate-400">
                Hiring Companies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold text-white">
                95%
              </h3>
              <p className="mt-2 text-slate-400">
                Match Accuracy
              </p>
            </div>

          </div>

          {/* Feature Cards */}
          <div className="mt-24 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-4 text-4xl">🤖</div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                AI Resume Analysis
              </h3>
              <p className="text-slate-400">
                Instantly analyze resumes and identify key
                strengths and skills.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Smart Job Matching
              </h3>
              <p className="text-slate-400">
                Get personalized job recommendations powered
                by AI algorithms.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Faster Hiring
              </h3>
              <p className="text-slate-400">
                Recruiters can discover and hire top talent
                in less time.
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
