"use client";

import { HoverEffect } from "../app/components/ui/card-hover-effect";
import { Shield, Sparkles, Users, Compass } from "lucide-react";
import { Button } from "./components/ui/button";
import Navbar from "./components/navbar";
import Image from "next/image";
import bgImage from "../public/bg1.png";
import AnimatedHero from "./components/AnimatedHero";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/app/components/ui/tabss";
import { SparklesCore } from "../app/components/ui/sparkles";

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const tabs = [
  {
    title: "Birth Chart",
    value: "birthchart",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-violet-600 to-indigo-600">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
        
        <div className="relative space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Personalized Kundali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">📝</span>
                Birth Details Required
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Full Name
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Date of Birth
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Time of Birth
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Gender
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  State & City
                </p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">🔮</span>
                Analysis Covers
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Complete 12 House Analysis
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Career Insights
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Relationship Compatibility
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Family Life Predictions
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Personal Growth Path
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Recommendations",
    value: "ai-recs",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-fuchsia-600 to-pink-600">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/20 rounded-full blur-xl"></div>
        
        <div className="relative space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Personalized Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">💎</span>
                Personal Recommendations
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Gemstone Suggestions
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Lucky Colors & Numbers
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Daily Do's & Don'ts
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Auspicious Timings
                </p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">🕉️</span>
                Spiritual Guidance
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Recommended Poojas
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Ritual Benefits
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Meditation Practices
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Spiritual Exercises
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Assistant",
    value: "assistant",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-600 to-cyan-600">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
        
        <div className="relative space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Intelligent Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">🤖</span>
                Chatbot Features
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Natural Language Interaction
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Instant Spiritual Advice
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Prediction Explanations
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  24/7 Availability
                </p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-colors shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">🧘‍♀️</span>
                Wellness Content
              </h3>
              <div className="space-y-4 text-gray-100">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Personalized Meditations
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Custom Sleep Content
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Spiritual Workouts
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Daily Wellness Tips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white overflow-hidden">
      <Navbar />
      <main className="relative min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex items-center ml-12 md:ml-48 min-h-screen md:p-8 pt-24">
          {/* Left Content */}

          <div className="space-y-8 lg:pr-8 w-[60%]">
            <div className="space-y-4">
              <AnimatedHero
                title="Discover Your Divine Path with Soulbuddy"
                subtitle="The astrology app that deciphers the mysteries of your life with the help of Vedic Astrology"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 relative overflow-hidden hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                {/* Shimmering border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <h2 className="font-semibold text-lg group-hover:text-purple-300">
                      Spiritual Services
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Personalized poojas, Dosh removals, and seasonal rituals
                    based on your birth chart
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 relative overflow-hidden hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <h2 className="font-semibold text-lg group-hover:text-purple-300">
                      Sacred Products
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Gemstones and Tantras based on your Birth dates for your
                    protection
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 relative overflow-hidden hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    <Users className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <h2 className="font-semibold text-lg group-hover:text-purple-300">
                      Spiritual Community
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Connect with people with live events and online sessions
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-800/50 relative overflow-hidden hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    <Compass className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <h2 className="font-semibold text-lg group-hover:text-purple-300">
                      Personal Guidance
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Discover spiritual solutions aligned with your birth
                    location and time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <video src="/munBg.mp4" autoPlay 
  className="w-full max-w-2xl h-auto bg-transparent mx-auto block" /> */}
          </div>
        </div>
      </main>
     

        <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-tight">
        Know Your Horoscope
      </h1>
          <HoverEffect items={projects} />
        </div>

        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 min-h-[400px] min-w-[300px]">
      <Tabs tabs={tabs} />
    </div>
      
    </div>
  );
}

export const projects = [
  {
    title: "Aries",
    description:
      "The first sign of the zodiac, Aries represents courage, determination, and enthusiasm. Natural-born leaders who are dynamic, confident, and energetic.",
    link: "/aries.svg",
  },
  {
    title: "Taurus",
    description:
      "Known for reliability, practicality, and devotion, Taurus is an earth sign characterized by stability, patience, and a strong connection to the material world.",
    link: "/taurus.svg",
  },
  {
    title: "Gemini",
    description:
      "Expressive and quick-witted, Gemini represents duality, adaptability, and communication. They are intellectually curious and masters of communication.",
    link: "/gemini.svg",
  },
  {
    title: "Cancer",
    description:
      "Deeply intuitive and sentimental, Cancer is characterized by emotional intelligence, nurturing nature, and strong attachment to home and family.",
    link: "/cancer.svg",
  },
  {
    title: "Leo",
    description:
      "Creative and dramatic, Leo brings warmth and charisma to the zodiac. Natural performers who are generous, loyal, and possess strong leadership qualities.",
    link: "/leo.svg",
  },
  {
    title: "Virgo",
    description:
      "Detail-oriented and analytical, Virgo represents precision, service, and practicality. They are methodical problem-solvers with a deep sense of humanity.",
    link: "/virgo.svg",
  },
  {
    title: "Libra",
    description:
      "Represented by the scales, Libra embodies balance, harmony, and justice. They are diplomatic, fair-minded, and have a strong sense of aesthetics.",
    link: "/libra.svg",
  },
  {
    title: "Scorpio",
    description:
      "Passionate and powerful, Scorpio represents intensity, transformation, and mystery. They are determined truth-seekers with incredible emotional depth.",
    link: "/scorpio.svg",
  },
  {
    title: "Sagittarius",
    description:
      "Optimistic and freedom-loving, Sagittarius represents philosophy, adventure, and expansion. They are natural explorers with a love for knowledge.",
    link: "/sagittarius.svg",
  },
  {
    title: "Capricorn",
    description:
      "Ambitious and disciplined, Capricorn represents responsibility, tradition, and achievement. They are master planners with an unwavering focus on goals.",
    link: "/capricorn.svg",
  },
  {
    title: "Aquarius",
    description:
      "Progressive and original, Aquarius represents innovation, community, and idealism. They are humanitarian thinkers who champion intellectual independence.",
    link: "/aquarius.svg",
  },
  {
    title: "Pisces",
    description:
      "Intuitive and artistic, Pisces represents compassion, creativity, and spirituality. They are empathetic dreamers with a deep connection to the collective unconscious.",
    link: "/pisces.svg",
  },
];
