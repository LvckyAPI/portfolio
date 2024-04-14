'use client';
import {motion} from "framer-motion";
import {FiMail} from "react-icons/fi";
import {SiDiscord, SiGithub, SiGitlab, SiLinkedin} from "react-icons/si";
import ContactLink from "../../components/Contact/ContactLink";
import MessageComponent from "../../components/Contact/MessageComponent";
import TimeStatus from "../../components/Contact/TimeStatus";

import "./_contact.scss";

export default function ContactPage() {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{ease: "easeOut", duration: 0.15}}
            className="lw-content-container contact-page"
        >
            <h1>Let's chat 💬</h1>
            <p>
                Do you have an enquiry or want to get in touch? Leave a message below or contact us via Discord,
                Instagram or email.
            </p>

            <TimeStatus/>

            <div className="contact-container">
                <MessageComponent/>
                <div className="socials">
                    <ContactLink
                        name="GitLab"
                        link={"https://git.lvckyworld.dev/iven.s"}
                        icon={<SiGitlab className="icon"/>}
                    />
                    <ContactLink
                        name="GitHub"
                        link={"https://github.com/lvckyapi"}
                        icon={<SiGithub className="icon"/>}
                    />
                    <ContactLink
                        name="LinkedIn"
                        link={"https://www.linkedin.com/in/iven-schlenther-996a84268/"}
                        icon={<SiLinkedin className="icon"/>}
                    />
                    <ContactLink
                        name="Discord"
                        link={"https://discord.com/users/466986428107063306"}
                        icon={<SiDiscord className="icon"/>}
                    />
                    <ContactLink
                        name="Email"
                        link={"mailto:hello@schlenther.dev"}
                        icon={<FiMail className="icon"/>}
                    />
                </div>
            </div>
        </motion.div>
    )
        ;
}