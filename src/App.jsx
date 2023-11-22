// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewGame from './components/pages/NewGamePage';
import PokerBoard from './components/pages/PokerBoardPage';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<PokerBoard />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
