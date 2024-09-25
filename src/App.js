<<<<<<< HEAD
import LoginSignup from './actions/components/auth/LoginSignup';
import Home from './actions/views/home/Home';
import New from './actions/views/new/New';
import History from './actions/views/history/History';
import Settings from './actions/views/settings/Settings';
=======

import LoginSignup from './components/auth/LoginSignup';
import './App.css';
import Home from './views/home/Home';
import New from './views/new/New';
import History from './views/history/History';
import Settings from './views/settings/Settings';
>>>>>>> 63b57cfc1461369be773e0b3a6645bfee898ba49
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginSignup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <tabNavigation />
    </div>
    </Router>
  );
}

export default App;
