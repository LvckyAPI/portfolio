import {useRef, useState} from "react";
import {RiSendPlane2Fill} from "react-icons/ri";
import {ImSpinner2} from "react-icons/im";
import {AnimatePresence, motion} from "framer-motion";
import {sendEmail} from "../../core/mailer/EmailSender";

import "./_MessageComponent.scss";

export default function MessageComponent() {
    const email = useRef<string>("");
    const message = useRef<string>("");
    const subject = useRef<string>("");
    const name = useRef<string>("");
    const [sending, setSending] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [messageSent, setMessageSent] = useState<boolean>(false);

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const sendMessage = async () => {
        if (email.current == "" || message.current == "" || subject.current == "") return setErrMsg("Please fill out all fields!");
        if (!emailRegex.test(email.current)) return setErrMsg("Hmm, that doesn't look like an email.");

        setSending(true);

        const sessionId = localStorage.getItem("lvckyworld-sid");

        if (!sessionId) {
            setErrMsg("Something went wrong. Please try again.");
            return setSending(false);
        }

        const mailStatus = await sendEmail(email.current, message.current, subject.current, (!!name.current), sessionId);

        if (mailStatus.success === false) {
            setErrMsg('Oops: ' + mailStatus.message);
            return setSending(false);
        }

        setSending(false);
        return setMessageSent(true);
    };

    return (
        <div className="message-component">
            <AnimatePresence mode={'wait'}>
                {messageSent && (
                    <motion.p
                        key={"contactThankYou"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                        className="success-message"
                    >
                        Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                )}
                {!messageSent && (
                    <motion.div
                        key={"contactForm"}
                        initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                    >
                        <h1>EMAIL</h1>
                        <input
                            placeholder="user@domain.tld"
                            type="text"
                            onChange={(e: any) => (email.current = e.target.value)}
                            className="input-field"
                        />

                        <h1>SUBJECT</h1>
                        <input
                            placeholder="General Question"
                            type="text"
                            onChange={(e: any) => (subject.current = e.target.value)}
                            className="input-field"
                        />

                        <h1 className={'hidden'}>NAME</h1>
                        <input
                            placeholder="Max Mustermann"
                            onChange={(e: any) => (name.current = e.target.value)}
                            className="hidden input-field"
                        />

                        <h1>MESSAGE</h1>
                        <textarea
                            placeholder="Hey ho, how are you going?"
                            onChange={(e: any) => (message.current = e.target.value)}
                            className="w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                        />

                        <div className="action-container">
                            <p>{errMsg}</p>

                            <button onClick={sendMessage}>
                                <span className="flex flex-row justify-center items-center">Send</span>
                                {!sending && <RiSendPlane2Fill className="ml-2"/>}
                                {sending && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin"/>}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};