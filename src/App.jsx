import React from 'react';
import { Layout, Profile, Repositories } from './components';

function App() {
  return (
    <Layout>
      <Profile/>
      <Repositories />
    </Layout>
  );
}

export default App;
