import React from 'react';
import styled from 'styled-components';
import useGithub from '../../hooks/github-hooks';

const StatusCountWrapper = styled.div`
    display:flex;
    align-items: flex-start;
    font-size: 0.75em;
    justify-content: space-around;
    text-align: center;
`;

const Status = styled.div`
    flex-direction: column;

    span, h4{
      margin: 0 1vw 0 0;
    }
`;

const StatusCount = () => {

  const { githubState } = useGithub();

  return (
    <StatusCountWrapper>
      <Status>
        <h4>Followers</h4>
        <span>{githubState.user.followers}</span>
      </Status>
      <Status>
        <h4>Following</h4>
        <span>{githubState.user.following}</span>
      </Status>
      <Status>
        <h4>Gists</h4>
        <span>{githubState.user.public_gists}</span>
      </Status>
      <Status>
        <h4>Repos</h4>
        <span>{githubState.user.public_repos}</span>
      </Status>
    </StatusCountWrapper>
  )
}

export default StatusCount;
