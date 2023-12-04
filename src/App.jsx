import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewGame from './components/pages/NewGamePage';
import PokerBoard from './components/pages/PokerBoardPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<PokerBoard />} />
      </Routes>
    </Router>
  );
};
export default App;