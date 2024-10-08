import LoginSignup from './components/auth/LoginSignup';
import './App.css';
import Home from './views/home/Home';
import New from './views/new/New';
import History from './views/history/History';
import Settings from './views/settings/Settings';
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
