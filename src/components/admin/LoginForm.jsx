"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Login failed. Please check credentials.");
      }

      router.push("/admin");
    } catch (err) {
      console.error("Login submission error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-10">
      <div className="flex flex-col items-center text-center mb-8">
        {/* Brand name */}
        <Link href="/" className="text-2xl font-black text-[#1e2547] tracking-tight hover:opacity-90 transition-opacity">
          DIGITAL<span className="text-[#6878d6]">AGENCY</span>
        </Link>
        <h2 className="text-xl font-bold text-[#1e2547] mt-6">Welcome Back</h2>
        <p className="text-gray-400 text-xs mt-1.5">Enter your credentials to access your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-600 border border-red-100 rounded-lg p-3.5 text-xs font-semibold animate-fadeIn">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-extrabold text-[#1e2547] uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
              <Mail className="h-4 w-4" />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 pl-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white transition-all duration-200 text-sm"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-extrabold text-[#1e2547] uppercase tracking-wider">
              Password
            </label>
             
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
              <Lock className="h-4 w-4" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3 px-4 pl-10 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white transition-all duration-200 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold py-3.5 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 uppercase tracking-wider text-xs cursor-pointer flex justify-center items-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;