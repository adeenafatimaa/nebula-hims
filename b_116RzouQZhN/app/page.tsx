"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { FloatingParticles } from "@/components/floating-particles"
import { ECGAnimation } from "@/components/ecg-animation"
import { ZigzagDivider } from "@/components/zigzag-divider"
import { NebulaLogo } from "@/components/nebula-logo"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign in attempt:", { username, password })
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#f0f0ff] to-[#ffffff]">
      {/* Left Panel - Dark Navy Branding */}
      <div className="relative w-[55%] bg-[#0f1e4a] flex flex-col items-center justify-center overflow-hidden">
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Logo and Tagline */}
        <div className="relative z-10 flex flex-col items-center">
          <NebulaLogo />
          <p className="mt-4 text-[#c8cce0] text-lg font-normal tracking-wide">
            A multi-dimensional health ecosystem.
          </p>
        </div>

        {/* ECG Animation */}
        <ECGAnimation />

        {/* Zigzag Divider */}
        <ZigzagDivider />
      </div>

      {/* Right Panel - Glassmorphism Login Form */}
      <div className="relative w-[45%] flex items-center justify-center p-12">
        <div
          className="w-full max-w-md p-10 rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0f1e4a] mb-2">Welcome back</h1>
            <p className="text-[#666] text-sm">
              Sign in to your Nebula account to continue
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-[#0f1e4a]">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-lg text-[#0f1e4a] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#9b6dff]/50 transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid rgba(200, 200, 220, 0.6)",
                }}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#0f1e4a]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 rounded-lg text-[#0f1e4a] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#9b6dff]/50 transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    border: "1px solid rgba(200, 200, 220, 0.6)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#0f1e4a] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #9b6dff 0%, #00e5cc 100%)",
                boxShadow: "0 4px 15px rgba(155, 109, 255, 0.3)",
              }}
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-[#666] text-sm">
              New patient?{" "}
              <a href="#" className="text-[#9b6dff] font-bold hover:underline">
                Register here
              </a>
            </p>
          </div>

          {/* Terms */}
          <p className="mt-8 text-center text-xs text-[#999]">
            By signing in, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}
