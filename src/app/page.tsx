'use client';
import {motion} from "framer-motion";
import TechItem from "../components/TechItem/TechItem";
import {
    SiDocker,
    SiGit,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
    SiYarn
} from "react-icons/si";
import {useEffect, useState} from "react";
import RepoItem from "../components/RepoItem/RepoItem";

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
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Iven 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a self-taught software engineer from the United States. I'm currently pursuing full-stack web
                development to create stunning user experiences on the front-end, and scalable and secure infrastructure
                on the backend.
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything in technology; from designing and developing software, to understanding
                how the many moving parts of the internet work together, to cybersecurity, programming, and so much
                more. I strive to learn more about these things every day, and utilize my knowledge to further
                understand <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div
                className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript"/>
                <TechItem icon={SiVisualstudiocode} name="VSCode"/>
                <TechItem icon={SiReact} name="React.js"/>
                <TechItem icon={SiNodedotjs} name="Node.js"/>
                <TechItem icon={SiJavascript} name="JavaScript"/>
                <TechItem icon={SiYarn} name="Yarn"/>
                <TechItem icon={SiNextdotjs} name="Next.js"/>
                <TechItem icon={SiTailwindcss} name="TailwindCSS"/>
                <TechItem icon={SiGit} name="Git"/>
                <TechItem icon={SiDocker} name="Docker"/>
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/lvckyapi"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and share what I know. In total, all of my open sourced projects have earnt
                me <span className="font-bold text-black dark:text-slate-200">{stats?.stars}</span> stars on GitHub,
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
