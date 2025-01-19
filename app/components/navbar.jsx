import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-purple-800/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              SoulBuddy
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#kundali" className="text-gray-300 hover:text-purple-400 transition-colors">
              Kundali
            </Link>
            <Link href="#horoscope" className="text-gray-300 hover:text-purple-400 transition-colors">
              Horoscope
            </Link>
            <Link href="#recommendations" className="text-gray-300 hover:text-purple-400 transition-colors">
              Recommendations
            </Link>
            <Link href="#spiritual-content" className="text-gray-300 hover:text-purple-400 transition-colors">
              Spiritual Content
            </Link>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
