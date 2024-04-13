'use client';
import {motion} from "framer-motion";
import avatar from "../../public/avatar.png";
import {useEffect, useState} from "react";
import RepoItem from "../components/RepoItem/RepoItem";
import Image from "next/image";
import "./style/main-page.scss";
import TechStack from "../components/TechStack/TechStack";

export default function Home() {

    const [stats, setStats]: any = useState();
    const [topRepos, setTopRepos]: any = useState();

    useEffect(() => {
        (async () => {
            let stats = localStorage.getItem('stats') as any;
            let repos = localStorage.getItem('repos') as any;
            let repos2 = localStorage.getItem('repos') as any;
            const currentTime = new Date().getTime();
            const expiryTime = 120 * 1000; // 120 seconds in milliseconds

            if (!stats || !repos || currentTime - JSON.parse(stats).timestamp > expiryTime) {
                stats = await fetch(`https://api.github-star-counter.workers.dev/user/lvckyapi`).then(res => res.json());
                repos = await fetch(`https://api.github.com/users/lvckyapi/repos?type=owner&per_page=100`).then(res => res.json());
                repos2 = await fetch(`https://api.github.com/users/lvckyworld/repos?type=owner&per_page=100`).then(res => res.json());

                localStorage.setItem('stats', JSON.stringify({value: stats, timestamp: currentTime}));
                localStorage.setItem('repos', JSON.stringify({value: repos, timestamp: currentTime}));
                localStorage.setItem('repos2', JSON.stringify({value: repos, timestamp: currentTime}));
            } else {
                stats = JSON.parse(stats).value;
                repos = JSON.parse(repos).value;
                repos2 = JSON.parse(repos2).value;
            }

            let repoMerge = [...repos, ...repos2];

            const topRepos = repoMerge
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
            className="lw-content-container home"
        >
            <div className={'avatar-container'}>
                <Image src={avatar} alt={'iven avatar'} width={400}
                       className={'avatar'}/>
            </div>
            <h1>Hey, I'm Iven 👋</h1>
            <p>
                I'm a full stack web developer from Magdeburg, Germany&nbsp;🇩🇪. Right now, I'm an apprentice at <a
                href={'https://muensmedia.de'}
                target={'_blank'}>MÜNSMEDIA&nbsp;GmbH</a>, also in Magdeburg. On top of that, I'm running my own project
                since <b>{new Date().getFullYear() - 2019}</b> years called <a href={'https://lvckyworld.net'}
                                                                               target={'_blank'}>LvckyWorld</a>.
            </p>

            <h2>What I Do 🤸</h2>
            <p>
                I started programming when I was just 11 years old. At first, I focused on Java for Minecraft plugins,
                but I quickly taught myself several other programming languages. TypeScript is my favourite language,
                and I love working with Docker and Linux. I have experience building APIs, web applications, websites,
                bots, and smaller scripts. I'm also skilled in automatic deployments (CI/CD) for GitLab and GitHub.
                Furthermore, I have extensive experience in Linux system/server administration.
            </p>

            <h2>Technologies 💻</h2>
            <p>
                I utilise various tools to simplify my development process and enhance the quality of my code and
                projects.
                The following is a list of technologies and languages I have experience with or
                currently use.
            </p>

            <TechStack/>

            <h2>Projects 🛠️</h2>
            <p>
                During my free time, I love to program for <a href={'https://lvckyworld.net'}
                                                              target={'_blank'}>LvckyWorld</a>!
                Additionally, I actively try to contribute to open source projects or create my own.
                {" "} I earnt with my projects on{" "}
                <a href="https://github.com/lvckyapi" rel="noreferrer">
                    GitHub
                </a>
                {" "} <span className="font-bold text-black dark:text-slate-200">{stats?.stars}</span> stars
                and{" "}
                <span className="font-bold text-black dark:text-slate-200">{stats?.forks}</span> forks. Below are some
                of
                my most popular repositories.
            </p>
            <div className="repo-container">
                {topRepos?.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                            owner={repo.owner.login}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}
