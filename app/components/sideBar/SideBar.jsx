"use client"


export default function SideBar() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent mb-8"></h1>
      </div>
    </div>
  );
}
