import React from 'react'
import App from './App'
import GlobalCSS from './global/globalCSS'
import GithubProvider from './providers/github-provider'

const Providers = () => {
  return (
    <GithubProvider>
        <GlobalCSS />
        <App />
    </GithubProvider>
  )
}

export default Providers
