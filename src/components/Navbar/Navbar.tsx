'use client'
import {AnimatePresence, motion} from "framer-motion";
import {SiDiscord, SiGithub, SiGitlab, SiLinkedin} from "react-icons/si";
import {FiMail} from "react-icons/fi";
import {usePathname} from "next/navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {useEffect, useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import LandingButton from "./mixin/LandingButton";
import LinkButton from "./mixin/LinkButton";
import MobileLandingButton from "./mixin/MobileLandingButton";

import './_Navbar.scss';
import {runHeaderScripts} from "./mixin/RunHeaderScripts";

export default function Navbar() {
    const pathName = usePathname();

    const [mobileMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(old => !old);
    };

    useEffect(() => {
        runHeaderScripts();
    }, [pathName]);

    return (<>
            <motion.div
                className="navbar">
                <div className="landing-buttons">
                    <ThemeToggle/>
                    <LandingButton name="Home" link="/" selected={pathName === "/"}/>
                    <LandingButton name="Contact" link="/contact" selected={pathName === "/contact"}/>
                    <LandingButton name="Site Notice" link="/site-notice" selected={pathName === "/site-notice"}/>
                </div>

                <div className="socials">
                    <LinkButtons/>
                </div>
            </motion.div>

            <motion.div
                className="navbar-mobile">
                <div className="flex flex-row items-center justify-between gap-2">
                    <ThemeToggle/>
                </div>

                <div className="burger-menu">
                    <button onClick={toggleMenu} className="btn" aria-label={'open burger menu'}>
                        {!mobileMenuOpen ? <HiMenu className="icon"/> : <HiX className="icon"/>}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence mode={"wait"}>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            key="NavBackdrop"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.1, ease: "easeInOut"}}
                            className="z-[500] fixed w-full h-screen overflow-hidden backdrop-blur-md bg-black/10 flex flex-col items-center justify-content"
                        />

                        <motion.div
                            key="NavMenu"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.1, ease: "easeInOut"}}
                            className="mobile-menu"
                        >
                            <div className="landing-container">
                                <MobileLandingButton
                                    name="Home"
                                    link="/"
                                    selected={pathName === "/"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Contact"
                                    link="/contact"
                                    selected={pathName === "/contact"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Site Notice"
                                    link="/site-notice"
                                    selected={pathName === "/site-notice"}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            <div className="socials">
                                <LinkButtons/>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export function LinkButtons() {
    return (
        <>
            <LinkButton
                title="GitLab"
                href={"https://git.lvckyworld.dev/iven.s"}
                icon={<SiGitlab className="icon second" aria-label={'GitLab'}/>}
            />
            <LinkButton
                title="GitHub"
                href={"https://github.com/lvckyapi"}
                icon={<SiGithub className="icon second" aria-label={'GitHub'}/>}
            />
            <LinkButton
                title="LinkedIn"
                href={"https://www.linkedin.com/in/iven-schlenther-996a84268/"}
                icon={<SiLinkedin className="icon second" aria-label={'LinkedIn'}/>}
            />
            <LinkButton
                title="Discord"
                href={"https://discord.com/users/466986428107063306"}
                icon={<SiDiscord className="icon second" aria-label={'Discord'}/>}
            />
            <LinkButton
                title="Email"
                href={"mailto:hello@schlenther.dev"}
                icon={<FiMail className="icon" aria-label={'Email'}/>}
            />
        </>
    )
}