"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-black px-6">

            {/* Background Glow */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative w-full max-w-lg">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500 mb-4 shadow-lg">
                            <span className="text-2xl">🔐</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="mt-3 text-slate-300">
                            Sign in to continue your job hunting journey.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

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

                        <div>
                            <label className="block mb-2 text-sm text-slate-300">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 pr-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me + Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-300">
                                <input
                                    type="checkbox"
                                    className="rounded border-white/20"
                                />
                                Remember me
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all shadow-lg"
                        >
                            Sign In →
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-white/10"></div>
                        <span className="px-3 text-slate-400 text-sm">
                            or continue with
                        </span>
                        <div className="flex-1 border-t border-white/10"></div>
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
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
