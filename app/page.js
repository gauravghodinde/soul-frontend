"use client"

import MainOuter from "./mainOuter/MainOuter";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>

      <MainOuter/>
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent mb-8 absolute">hello</h1>
      </div>
    </div>
  );
}
