import Header from './containers/Header';
import Converter from './containers/Converter';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <Converter />
      </main>
    </div>
  );
}

export default App;
