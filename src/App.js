import TabNavigation from './actions/components/navbar/TabNavigation';
import Home from './actions/views/home/Home';
function App() {
  return (
    <div className="App">
      <div className="content">
        <Home/>
        <TabNavigation/>
      </div>
    </div>
  );
}

export default App;
