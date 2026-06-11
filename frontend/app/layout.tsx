import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// প্রোফেশনাল লুকের জন্য Plus Jakarta Sans ফন্ট ইনিশিয়ালাইজ করা হলো
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JobMatrix AI | Next-Gen Recruitment Platform",
  description: "AI-Powered Job Portal and Recruitment SaaS Platform",
  icons: {
    icon: "/favicon.ico", // তোমার প্রোজেক্টের ফ্যাবআইকন পাথ
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} font-sans bg-slate-50 text-slate-900 antialiased pt-16`}
      >
        {/* গ্লোবাল নেভিগেশন বার */}
        <Navbar />

        {/* মেইন কন্টেন্ট এরিয়া */}
        {children}
      </body>
    </html>
  );
}