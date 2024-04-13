import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.scss";
import Navbar from "../components/Navbar/Navbar";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

const roboto = Roboto({weight: ["400"], subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Iven Schlenther | Fullstack Developer",
    description: "Hello, my name is Iven an I'm a Fullstack Developer. I'm passionate about building web applications and learning new technologies.",
    openGraph: {
        title: "Iven Schlenther | Fullstack Developer",
        description: "Hello, my name is Iven an I'm a Fullstack Developer. I'm passionate about building web applications and learning new technologies.",
        type: "website",
        locale: "en_US",
        url: "https://schlenther.dev",

        images: [
            {
                url: "https://iven:schlenther@staging.schlenther.dev/avatar.png",
                width: 1024,
                height: 1024,
                alt: "Iven Schlenther | Fullstack Developer",
            },
        ],
    },

};

export const viewport = {
    themeColor: "#e7a3ff",
    width: 1,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={roboto.className}>

        <div
            className="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#E9B5FF] dark:from-black dark:to-[#2E1A37] min-h-screen">
            <Navbar />
            <div className="w-[80%] md:w-[45rem]">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
