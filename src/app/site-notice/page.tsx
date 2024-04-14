'use client';
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {getSiteNoticeInfo} from "../../core/eRecht24/FetchER24";

import "./_site-notice.scss"

export default function NotFound() {
    const [siteNoticeEng, setSiteNoticeEng] = useState('');
    const [siteNoticeGer, setSiteNoticeGer] = useState('');

    useEffect(() => {
        getSiteNoticeInfo().then(res => setSiteNoticeGer(res.html_de));
        getSiteNoticeInfo().then(res => setSiteNoticeEng(res.html_en));
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.6}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{ease: "easeOut", duration: 0.5}}
            className="lw-content-container"
        >

            <div className={'legal-notice'}>
                <h3>Information according to §5 TMG:</h3>
                <div dangerouslySetInnerHTML={{__html: siteNoticeEng}}/>

                <hr/>

                <h3 className={'second'}>Angaben gemäß §5 TMG:</h3>
                <div dangerouslySetInnerHTML={{__html: siteNoticeGer}}/>
            </div>

        </motion.div>
    );
}