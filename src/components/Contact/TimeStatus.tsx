import {useEffect, useState} from "react";

import "./_TimeStatus.scss";

export default function TimeStatus() {
    const [time, setTime] = useState<string>("00:00:00 p.m.");
    const [awake, setAwake] = useState<boolean>(true);

    useEffect(() => {
        const updateTime = (() => {
            let now = new Date();
            let weekday = now.toLocaleString("en-US", {
                timeZone: "Europe/Berlin",
                weekday: 'long'
            });
            let time = now.toLocaleString("en-US", {
                timeZone: "Europe/Berlin",
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            });
            let current = `${weekday}, ${time}`;
            setTime(current);
            setTimeout(updateTime, 60 * 1000);

            let currentHour = new Date().getHours();
            if (currentHour >= 22 || currentHour < 9) setAwake(false);
            else setAwake(true);
        });
        updateTime();
    }, []);

    return (
        <p className="time-status">
            It's currently <span>{time}</span> for me, so I'm probably{" "}<span>{awake ? "awake" : "sleeping"}</span>.
            I'll get back to you soon.
        </p>
    );
};
