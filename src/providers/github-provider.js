import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
    hasUser: false,
    loading: false,
    user: {},
    repositories: [],
    starred: []
});

const GithubProvider = ( {children} ) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        hasUser: false,
        user: {
            id: undefined,
            login: undefined,
            html_url: undefined,
            avatar_url: undefined,
            name: undefined,
            company: undefined,
            location: undefined,
            blog: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });

    const getUser = ( username ) => {

        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }))

        api.get(`users/${username}`)
            .then(response => {
                const data = response.data;
                
                setGithubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        login: data.login,
                        html_url: data.html_url,
                        avatar_url: data.avatar_url,
                        name: data.name,
                        company: data.company,
                        location: data.location,
                        blog: data.blog,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos
                }
                }))
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading
                }))
            })
    }

    const getRepositories = (username) => {
        api.get(`users/${username}/repos`)
            .then(response => {
                const data = response.data;
                setGithubState(prevState => ({
                    ...prevState,
                    repositories: data,
                }))
            })
    }

    const getStarred = (username) => {
        api.get(`users/${username}/starred`)
            .then(response => {
                const data = response.data;
                setGithubState(prevState => ({
                    ...prevState,
                    starred: data,
                }))
            })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getRepositories: useCallback((username) => getRepositories(username), []),
        getStarred: useCallback((username) => getStarred(username), []),
    }

    return <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
}

export default GithubProvider;
