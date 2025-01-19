import React from "react";
import Link from "next/link";

export const Sidebar = ({ children }) => {
  return (

    <div className="w-[18%] z-30 h-full bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
      {children}

    </div>
  );
};

export const SidebarBody = ({ className, ...props }) => {
  return (
    <div
      className={`flex flex-col h-full px-4 py-6 ${className}`}
      {...props}
    />
  );
};

export const SidebarLink = ({ label, href, icon, className, ...props }) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-start gap-2 py-3 px-3 rounded-lg cursor-pointer hover:bg-black/10 transition-colors ${className}`}
      {...props}
    >
      <span className="text-xl font-medium">{label}</span>
    </Link>
  );
};

