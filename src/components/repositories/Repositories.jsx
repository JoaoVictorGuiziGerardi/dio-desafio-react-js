import React from 'react';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import styled from 'styled-components';

const WrapperTabs = styled(Tabs)`
    font-size: 1em;
    width: 50vw;
`;

const WrapperTabList = styled(TabList)`
    list-style: none;
    display: flex;
    justify-content: center;
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
    padding: 5px;
    margin-bottom: 2vh;

    &.is-selected{
      display: block;
      border: 1px solid rgb(143,143,189);
      border-radius: 5px;
    }
`;

const Repositories = () => {
  return (
    <WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <WrapperTabList>
        <WrapperTab>Repositories</WrapperTab>
        <WrapperTab>Starred</WrapperTab>
      </WrapperTabList>
      <hr />
      <WrapperTabPanel>Panel Repositories</WrapperTabPanel>
      <WrapperTabPanel>Panel Starred</WrapperTabPanel>
    </WrapperTabs>
  )
}

export default Repositories
