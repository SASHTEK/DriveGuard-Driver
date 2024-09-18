
import LoginSignup from './actions/components/auth/LoginSignup';
import Home from './actions/views/home/Home';
import New from './actions/views/new/New';
function App() {
  return (
    <div className="App">
      <div className="content">
        <LoginSignup/>
        <Home/>
        <New/>

      </div>
    </div>
  );
}

export default App;
