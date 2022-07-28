import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import styled from 'styled-components';
import {RepositoryItem} from '../';
import useGithub from '../../hooks/github-hooks';

const WrapperTabs = styled(Tabs)`
    font-size: 1em;
    width: 50vw;
`;

const WrapperTabList = styled(TabList)`
    list-style: none;
    display: flex;
    justify-content: flex-start;
`;

const WrapperTab = styled(Tab)`
    margin: 0px 10px;
    padding: 5px;
    background-color: rgb(143,143,189);
    color: #fff;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;

    :hover{
      cursor: pointer;
      background-color: rgb(143,143,189, 0.8);
      box-shadow: 1.5px 1.5px 1.5px gray;
    }

    &.is-selected{
      background-color: rgb(143,143,189, 0.6);
      outline: none;
    }
`;

const WrapperTabPanel = styled(TabPanel)`
    display: none;
    min-height: 40vh;
    margin-bottom: 2vh;

    &.is-selected{
      display: flex;
      flex-wrap: wrap;
    }
`;

const Repositories = () => {

  const { githubState, getRepositories, getStarred } = useGithub();
  const [ hasUser, setHasUser] = useState(false);

  useEffect(() => {
    if(!!githubState.user.login){
      getRepositories(githubState.user.login);
      getStarred(githubState.user.login);
    }
    setHasUser(!!githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUser ? (
        <WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <WrapperTabList>
            <WrapperTab>Repositories</WrapperTab>
            <WrapperTab>Starred</WrapperTab>
          </WrapperTabList>
          <hr />
          <WrapperTabPanel>
            {githubState.repositories.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
              />
            ))}
          </WrapperTabPanel>
          <WrapperTabPanel>
            {githubState.starred.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
              />
            ))}
          </WrapperTabPanel>
        </WrapperTabs>
        ) : <></>
      }
    </>
  )
}

export default Repositories
