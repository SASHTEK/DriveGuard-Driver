
import LoginSignup from './actions/components/auth/LoginSignup';
import Home from './actions/views/home/Home';
import New from './actions/views/new/New';
import History from './actions/views/history/History';
import Settings from './actions/views/settings/Settings';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <LoginSignup/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
