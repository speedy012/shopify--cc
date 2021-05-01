import './App.css';

import Nominations from './components/Nominations'
import Results from './components/Results'
import Search from './components/Search'

function App() {




  return (
    <div className="App">
      <Search/>
      <Results/>
      <Nominations/>
    </div>
  );
}

export default App;
