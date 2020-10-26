import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const isMobile = window.matchMedia('(max-width: 430px)').matches;
  return (
    <div>
      <Router>
        <Routes isMobile={isMobile} />
      </Router>
    </div>
  );
}

export default App;
