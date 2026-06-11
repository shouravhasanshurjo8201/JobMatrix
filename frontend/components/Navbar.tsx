'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
                            JobMatrix <span className="text-slate-950">AI</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/jobs" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">
                            Find Jobs
                        </Link>
                        <Link href="/dashboard" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">
                            Dashboard
                        </Link>
                    </div>

                    {/* Desktop Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/forgot-password" className="text-slate-500 hover:text-indigo-600 text-xs font-medium transition-colors">
                            Forgot Password?
                        </Link>
                        <Link href="/login" className="text-slate-700 hover:text-slate-900 font-medium text-sm">
                            Sign In
                        </Link>
                        <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-sm">
                            Post a Job
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 focus:outline-none transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden border-b border-slate-200 bg-white" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            href="/jobs"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                        >
                            Find Jobs
                        </Link>
                        <Link
                            href="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                        >
                            Dashboard
                        </Link>
                        <hr className="my-2 border-slate-100" />
                        <Link
                            href="/forgot-password"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                        >
                            Forgot Password?
                        </Link>
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                            Sign In
                        </Link>
                        <div className="px-3 pt-2">
                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-4 py-2.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-sm"
                            >
                                Post a Job
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}