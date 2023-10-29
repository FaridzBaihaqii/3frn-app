import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Signup from './Signup';
import SignInSide from './SignInSide';
import Home from '../Components/web';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="/SignInSide" element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;
