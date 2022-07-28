import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    border: 1px solid rgb(143,143,189);
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 15vw;
    min-height: 20vh;
    margin: 5px 5px;

    h3, h4{
      margin: 5px 5px;
      font-size: 1em;
    }

    a{
      margin: 5px 5px;
      font-size: 0.80em;
    }
    
`;

const RepositoryItem = ( { name, fullName, linkToRepo } ) => {
  return (
    <ItemWrapper>
      <h3>{name}</h3>
      <h4>Full name:</h4>
      <a href={linkToRepo}>
        {fullName}
      </a>
    </ItemWrapper>
  )
}

export default RepositoryItem;
