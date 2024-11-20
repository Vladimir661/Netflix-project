import React from 'react';
import './components/style/mainStyle.css';
import Header from './components/Header';
import Content from './components/Content';
import Profile from './components/pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <Header />
              <Content />
            </>
          } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;