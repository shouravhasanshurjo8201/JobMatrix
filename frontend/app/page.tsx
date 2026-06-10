import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-linear-to-br from-slate-900 to-indigo-950 text-white">
      <div className="text-center max-w-2xl">
        <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
          Powered by AI ✨
        </span>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-indigo-200">
          JobMatrix AI
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Next Generation AI Recruitment Platform. Connect, analyze resumes, and find matches seamlessly.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg shadow-lg shadow-indigo-600/20 transition-all">
            Find Jobs
          </button>
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 font-medium rounded-lg border border-slate-700 transition-all">
            Post a Job
          </button>
        </div>
      </div>
    </main>
  );
}