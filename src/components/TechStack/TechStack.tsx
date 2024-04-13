import TechItem from "../TechItem/TechItem";
import {
    SiDocker,
    SiExpress,
    SiGithub,
    SiGitlab,
    SiGnubash,
    SiJavascript,
    SiJetbrains,
    SiLaravel,
    SiLinux,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiOpenjdk,
    SiPhp,
    SiPython,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTraefikproxy,
    SiTypescript,
    SiVisualstudiocode,
    SiWindows10
} from "react-icons/si";

import "./_TechStack.scss";

export default function TechStack() {
    return (
        <div
            className="tech-stack-container">
            <TechItem icon={SiGitlab} name="GitLab"/>
            <TechItem icon={SiGithub} name="GitHub"/>
            <TechItem icon={SiDocker} name="Docker"/>
            <TechItem icon={SiLinux} name="Linux & Server"/>
            <TechItem icon={SiWindows10} name="Windows 11 & Server"/>
            <TechItem icon={SiTraefikproxy} name="traefik Proxy"/>
            <TechItem icon={SiNginx} name="NGINX"/>
            <TechItem icon={SiNodedotjs} name="Node.js"/>
            <TechItem icon={SiOpenjdk} name="Java"/>
            <TechItem icon={SiJavascript} name="JavaScript"/>
            <TechItem icon={SiTypescript} name="TypeScript"/>
            <TechItem icon={SiPhp} name="PHP"/>
            <TechItem icon={SiGnubash} name="Bash/Shell"/>
            <TechItem icon={SiPython} name="Python"/>
            <TechItem icon={SiJetbrains} name="JetBrains IDEAS"/>
            <TechItem icon={SiVisualstudiocode} name="Visual Studio Code"/>
            <TechItem icon={SiLaravel} name="Laravel"/>
            <TechItem icon={SiExpress} name="Express.js"/>
            <TechItem icon={SiReact} name="React"/>
            <TechItem icon={SiNextdotjs} name="Next.js"/>
            <TechItem icon={SiTailwindcss} name="TailwindCSS"/>
            <TechItem icon={SiSass} name="SASS/SCSS"/>
        </div>
    );
}