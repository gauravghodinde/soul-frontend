import React from "react";
import Link from "next/link";

export const Sidebar = ({ children }) => {
  return (
    <div className="w-[20%] h-full bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
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
      className={`flex items-center justify-start gap-2 py-2 px-3 rounded-md hover:bg-white/10 transition-colors ${className}`}
      {...props}
    >
      {icon}
      <span className="text-lg font-medium">{label}</span>
    </Link>
  );
};

