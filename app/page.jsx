import { Shield, Sparkles, Users, Compass } from 'lucide-react'
import { Button } from "./components/ui/button"
import Navbar from "./components/navbar"
import Image from 'next/image'
import bgImage from '../public/bg1.png'


export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white overflow-hidden">
      <Navbar />
      <main className="relative min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-[#0D0B1F]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container grid lg:grid-cols-2 gap-8 items-center min-h-screen p-4 md:p-8 pt-24">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                The World's First Spiritual Insurance Platform
              </h1>
              <p className="text-lg text-gray-300">
                Your soul deserves protection too, not just your mind and body.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 hover:bg-purple-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h2 className="font-semibold text-lg">Spiritual Services</h2>
                </div>
                <p className="text-sm text-gray-300">
                  Personalized poojas, Dosh removals, and seasonal rituals based on your birth chart
                </p>
              </div>

              <div className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 hover:bg-purple-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h2 className="font-semibold text-lg">Sacred Products</h2>
                </div>
                <p className="text-sm text-gray-300">
                  Gemstones and Tantras based on your Birth dates for your protection
                </p>
              </div>

              <div className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 hover:bg-purple-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h2 className="font-semibold text-lg">Spiritual Community</h2>
                </div>
                <p className="text-sm text-gray-300">
                  Connect with people with live events and online sessions
                </p>
              </div>

              <div className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 hover:bg-purple-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Compass className="w-6 h-6 text-purple-400" />
                  <h2 className="font-semibold text-lg">Personal Guidance</h2>
                </div>
                <p className="text-sm text-gray-300">
                  Discover spiritual solutions aligned with your birth location and time
                </p>
              </div>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
              Get my insurance
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Right Content - Sign In Form */}
          <div className="lg:block">
            <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-purple-900/30 backdrop-filter backdrop-blur-lg border border-purple-500/30 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Sign In</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 bg-purple-800/30 border border-purple-500/50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-3 py-2 bg-purple-800/30 border border-purple-500/50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
              
                <div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-300 ease-in-out">
                    Sign In
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-purple-300 hover:text-purple-200">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

