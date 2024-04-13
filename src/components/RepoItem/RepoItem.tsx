import {AiOutlineStar} from "react-icons/ai";
import {BiGitRepoForked} from "react-icons/bi";

import "./_RepoItem.scss";

interface RepoProps {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: "TypeScript" | "Python";
    owner: string;
}

export default function RepoItem({name, description, stars, forks, language, owner}: RepoProps) {
    return (
        <a href={`https://github.com/${owner}/${name}`} rel="noreferrer" target="_blank">
            <div
                className="repo-item">
                <h1 className="font-semibold mb-1">{name}</h1>
                <p className="text-sm text-gray-900 dark:text-gray-100/70">{description}</p>
                <div className="stats">
                    <div className="flex flex-row items-start">
                        {language}
                    </div>

                    <p>
                        <AiOutlineStar className="mr-1 w-4 h-4"/> {stars}
                    </p>
                    <p>
                        <BiGitRepoForked className="mr-1 w-4 h-4"/> {forks}
                    </p>
                </div>
            </div>
        </a>
    );
}