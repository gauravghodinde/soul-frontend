"use client"

import { Sidebar, SidebarBody, SidebarLink } from "../components/sideBar/SideBar";
import { ChatBox } from "../components/chatBox/ChatBox";
import Link from "next/link";
import Image from "next/image";

export default function MainOuter() {
    const links = [
        { label: "Horoscope", href: "#" },
        { label: "Seasonal Rituals", href: "#" },
        { label: "Gemstones", href: "#" },
        { label: "Spiritual Community", href: "#" },
        { label: "Logout", href: "#" },
    ];
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="flex min-h-screen w-full h-screen">
            <Sidebar>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {/* <Logo /> */}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} label={link.label} href={link.href} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            label="Mystic User"
                            href="#"
                            icon={
                                <Image
                                    src="/placeholder.svg?height=50&width=50"
                                    className="h-7 w-7 flex-shrink-0 rounded-full bg-purple-300"
                                    width={50}
                                    height={50}
                                    alt="Avatar"
                                />
                            }
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex-1">
                <div className="min-h-screen flex flex-col justify-center items-center px-4 relative">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#6800ad] to-[#c02af5] bg-clip-text text-transparent mb-[10vh] transform -translate-x-1/2l text-center w-full px-4">
                        Ask Aceternity UI Anything
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
