import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100/50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-slate-500">Sign in to track your job applications</p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Email Address</label>
                            <input type="email" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors bg-slate-50/50" placeholder="shourav@example.com" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Password</label>
                            <input type="password" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors bg-slate-50/50" placeholder="••••••••" />
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-md transition-all">
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-slate-500 mt-4">
                    Don't have an account? <Link href="/register" className="text-indigo-600 font-semibold hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
}