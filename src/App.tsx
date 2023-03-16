
import Header from './StaticLayout/Header/Header';

import Navigation from './Components/Navigation/Navigation';

import './App.scss';

function App() {
  return (
    <div className="wrapper">

      <Header/>

      <main className="main">
        <h2>main</h2>
      </main>
      <footer className="app-footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
