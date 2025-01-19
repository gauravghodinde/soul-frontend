"use client"

import { Sidebar, SidebarBody, SidebarLink } from "../components/sideBar/SideBar";
import { ChatBox } from "../components/chatBox/ChatBox";
import Link from "next/link";
import Image from "next/image";

export default function MainOuter() {
    const links = [
        { label: "Horoscope", href: "/horoscope" },
        { label: "Planets", href: "/planets" },
        { label: "Gemstones", href: "#" },
        { label: "Advices", href: "/advices" },
    ];
    const placeholders = [
        "What does your zodiac sign reveal about you?",
        "How do numbers influence your life path?",
        "What are the characteristics of a rising sign?",
        "How to calculate your life path number?",
        "What is the significance of Mercury retrograde in astrology?",
    ];
    
    const handleChange = (e) => {
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex min-h-screen w-full h-screen z-20">
            <Sidebar>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {/* <Logo /> */}
                        <Link href='#' className="newChat bg-black px-5 py-3 rounded-lg text-xl hover:bg-gray-800 cursor-pointer"><span>New Chat</span></Link>
                        <div className="mt-8 flex flex-col gap-2 ">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} label={link.label} href={link.href} />
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex-1">
                <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent mb-[10vh] transform -translate-x-1/2l text-center w-full px-4">
                        Ask SoulBuddy Anything
                    </h1>
                    <ChatBox
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
}
