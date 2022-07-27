import React from 'react';
import styled from 'styled-components';

const StatusCountWrapper = styled.div`
    display:flex;
    align-items: flex-start;
    font-size: 0.75em;
    justify-content: space-around;
`;

const Status = styled.table`
    th, td{
      text-align: center;
    }
`;

const StatusCount = () => {
  return (
    <StatusCountWrapper>
      <Status>
        <thead>
          <th>Followers</th>
          <th>Following</th>
          <th>Gists</th>
          <th>Repos</th>
        </thead>
        <tbody>
          <td>3</td>
          <td>5</td>
          <td>0</td>
          <td>6</td>
        </tbody>
      </Status>
    </StatusCountWrapper>
  )
}

export default StatusCount;
