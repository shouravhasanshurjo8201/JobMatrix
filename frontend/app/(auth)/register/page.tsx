"use client";
import Link from "next/link";
import { JSX, useState } from "react";

const RegisterPage = (): JSX.Element => {
    const [role, setRole] = useState<"candidate" | "recruiter">("candidate");

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-black px-6">
            {/* Background Glow */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative w-full max-w-lg">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500 mb-4 shadow-lg">
                            <span className="text-2xl">🚀</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white">
                            Create Account
                        </h1>

                        <p className="mt-3 text-slate-300">
                            Start your AI-powered recruitment journey today.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm text-slate-300">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Shourav Hasan"
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-slate-300">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="shourav@example.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="block mb-3 text-sm text-slate-300">
                                Join As
                            </label>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole("candidate")}
                                    className={`rounded-xl p-4 border transition-all ${role === "candidate"
                                        ? "border-indigo-500 bg-indigo-500/20"
                                        : "border-white/20"
                                        }`}
                                >
                                    <h3 className="text-white font-semibold">👨‍💻 Job Seeker</h3>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Find your dream job
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole("recruiter")}
                                    className={`rounded-xl p-4 border transition-all ${role === "recruiter"
                                        ? "border-cyan-500 bg-cyan-500/20"
                                        : "border-white/20"
                                        }`}
                                >
                                    <h3 className="text-white font-semibold">🏢 Recruiter</h3>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Hire top talents
                                    </p>
                                </button>
                            </div>

                            <input type="hidden" name="role" value={role} />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-slate-300">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Minimum 6 characters"
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all shadow-lg"
                        >
                            Create Account →
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-white/10" />
                        <span className="px-3 text-slate-400 text-sm">
                            or continue with
                        </span>
                        <div className="flex-1 border-t border-white/10" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="border border-white/20 rounded-xl py-3 text-white hover:bg-white/10 transition"
                        >
                            Google
                        </button>

                        <button
                            type="button"
                            className="border border-white/20 rounded-xl py-3 text-white hover:bg-white/10 transition"
                        >
                            GitHub
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-slate-400 text-sm mt-8">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;