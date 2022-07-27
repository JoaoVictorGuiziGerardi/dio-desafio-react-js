import React from 'react';
import styled from 'styled-components';
import { Header } from '../'; 

const WrapperLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Layout( {children} ) {
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  )
}

export default Layout
