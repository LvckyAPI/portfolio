'use server';
import axios from 'axios';
import {GitHubCache} from "../cache/GitHubCache";

export default async function fetchGitHubStats() {
    if (GitHubCache.has('github-stats')) return GitHubCache.get('github-stats');

    let stats = (await axios.get(`https://api.github-star-counter.workers.dev/user/lvckyapi`)).data;
    let stats2 = (await axios.get(`https://api.github-star-counter.workers.dev/user/lvckyworld`)).data;
    let repos = (await axios.get(`https://api.github.com/users/lvckyapi/repos?type=owner&per_page=100`)).data;
    let repos2 = (await axios.get(`https://api.github.com/users/lvckyworld/repos?type=owner&per_page=100`)).data;

    let repoMerge = [...repos, ...repos2];

    const topRepos = repoMerge
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    const statsResult = {stars: stats2.stars + stats.stars, forks: stats2.forks + stats.forks};

    GitHubCache.set('github-stats', {stats: statsResult, topRepos: topRepos});

    return {
        stats: statsResult,
        topRepos: topRepos
    };
}

export async function getGitHubStats() {
    return await fetchGitHubStats().then(res => res);
}
