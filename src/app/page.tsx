'use client';
import {motion} from "framer-motion";
import TechItem from "../components/TechItem/TechItem";
import avatar from "../../public/avatar.png";
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
    SiWindows10,
} from "react-icons/si";
import {useEffect, useState} from "react";
import RepoItem from "../components/RepoItem/RepoItem";
import Image from "next/image";

export default function Home() {

    const [stats, setStats]: any = useState();
    const [topRepos, setTopRepos]: any = useState();

    useEffect(() => {
        (async () => {
            let stats = localStorage.getItem('stats') as any;
            let repos = localStorage.getItem('repos') as any;
            const currentTime = new Date().getTime();
            const expiryTime = 120 * 1000; // 120 seconds in milliseconds

            if (!stats || !repos || currentTime - JSON.parse(stats).timestamp > expiryTime) {
                stats = await fetch(`https://api.github-star-counter.workers.dev/user/lvckyapi`).then(res => res.json());
                repos = await fetch(`https://api.github.com/users/lvckyapi/repos?type=owner&per_page=100`).then(res => res.json());

                localStorage.setItem('stats', JSON.stringify({value: stats, timestamp: currentTime}));
                localStorage.setItem('repos', JSON.stringify({value: repos, timestamp: currentTime}));
            } else {
                stats = JSON.parse(stats).value;
                repos = JSON.parse(repos).value;
            }

            const topRepos = repos
                .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
                .slice(0, 4);

            setStats(stats);
            setTopRepos(topRepos);
        })();
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{ease: "easeOut", duration: 0.15}}
            className="mt-24 w-full mb-32"
        >
            <div className={'mt-36 mb-4 flex flex-row justify-center items-center'}>
                <Image src={avatar} alt={'iven avatar'} width={400}
                       className={'w-28 md:w-48 rounded-full outline shadow-lg dark:shadow-purple-900 shadow-purple-300'}/>
            </div>
            <h1 className="mt-8 mb-4 font-bold text-4xl md:text-5xl">Hey, I'm Iven 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a full stack web developer from Magdeburg, Germany&nbsp;🇩🇪. Right now, I'm an apprentice at <a
                className={'font-semibold text-violet-500 hover:underline'} href={'https://muensmedia.de'}
                target={'_blank'}>MÜNSMEDIA&nbsp;GmbH</a>, also in Magdeburg. On top of that, I'm running my own project
                since <b>{new Date().getFullYear() - 2019}</b> years called <a
                className={'font-semibold text-violet-500 hover:underline'}
                href={'https://lvckyworld.net'}
                target={'_blank'}>LvckyWorld</a>.
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 🤸</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I started programming when I was just 11 years old. At first, I focused on Java for Minecraft plugins,
                but I quickly taught myself several other programming languages. TypeScript is my favourite language,
                and I love working with Docker and Linux. I have experience building APIs, web applications, websites,
                bots, and smaller scripts. I'm also skilled in automatic deployments (CI/CD) for GitLab and GitHub.
                Furthermore, I have extensive experience in Linux system/server administration.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I utilise various tools to simplify my development process and enhance the quality of my code and
                projects.
                The following is a list of technologies and languages I have experience with or
                currently use.
            </p>
            <div
                className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
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

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                During my free time, I love to program for <a
                className={'font-semibold text-violet-500 hover:underline'}
                href={'https://lvckyworld.net'} target={'_blank'}>LvckyWorld</a>!
                Additionally, I actively try to contribute to open source projects or create my own.
                {" "} I earnt with my projects on{" "}
                <a
                    href="https://github.com/lvckyapi"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                {" "} <span className="font-bold text-black dark:text-slate-200">{stats?.stars}</span> stars
                and{" "}
                <span className="font-bold text-black dark:text-slate-200">{stats?.forks}</span> forks. Below are some
                of
                my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos?.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}
