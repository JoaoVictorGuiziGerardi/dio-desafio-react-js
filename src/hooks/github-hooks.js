import { useContext } from 'react'
import { GithubContext } from '../providers/github-provider';

const useGithub = () => {
    const {githubState, getUser, getRepositories, getStarred} = useContext(GithubContext);

    return {githubState, getUser, getRepositories, getStarred};
};

export default useGithub;

