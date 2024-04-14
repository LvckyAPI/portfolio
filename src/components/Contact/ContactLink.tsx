import React, {ReactElement} from "react";
import {FiExternalLink} from "react-icons/fi";
import Link from "next/link";
import {animated, useSpring} from "react-spring";

import "./_ContactLink.scss"

const calc = (x: number, y: number) => [-(y - window.innerHeight / 3) / 35, (x - window.innerWidth / 1.5) / 30, 1.05];
const trans = (x: number, y: number, s: number): string =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ContactLink({name, icon, link}: {
    name: string;
    icon: ReactElement;
    link: string;
    borderColor?: string;
}) {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 1, tension: 350, friction: 40},
    }));

    return (
        <Link href={link} target={'_blank'}>
            <animated.div
                onMouseMove={({clientX: x, clientY: y}: { clientX: number; clientY: number }) =>
                    set({xys: calc(x, y)})
                }
                onMouseLeave={() => set({xys: [0, 0, 1]})}
                style={{transform: props.xys.to(trans)}}
                className={'contact-link'}
            >

                {icon}
                <h1 className="contact-name">{name}</h1>
                <FiExternalLink className="external-link" />
            </animated.div>
        </Link>
    );
};
