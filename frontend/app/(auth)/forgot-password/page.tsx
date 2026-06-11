'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setMessage('');
        setError('');

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message);
            } else {
                setError(data.message || 'Something went wrong.');
            }
        } catch {
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-black px-6">

            {/* Background Glow */}
            <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative w-full max-w-lg">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg">
                            <span className="text-2xl">🔑</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white">
                            Forgot Password?
                        </h1>

                        <p className="mt-3 text-slate-300">
                            Enter your email and we'll send you a secure reset link.
                        </p>
                    </div>

                    {/* Alerts */}
                    {message && (
                        <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                            ✅ {message}
                        </div>
                    )}

                    {error && (
                        <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                            ❌ {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Email Address
                            </label>

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="shourav@example.com"
                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? 'Sending Reset Link...' : 'Send Reset Link →'}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/login"
                            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                            ← Back to Login
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}