import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Main from './features/main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path=":projectId" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
