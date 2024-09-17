
import LoginSignup from './actions/components/auth/LoginSignup';
import Home from './actions/views/home/Home';
function App() {
  return (
    <div className="App">
      <div className="content">
        <LoginSignup/>
        <Home/>

      </div>
    </div>
  );
}

export default App;
