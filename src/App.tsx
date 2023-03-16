
import Header from './StaticLayout/Header/Header';

import Navigation from './Components/Navigation/Navigation';

import './App.scss';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Button appearense="primary">Click me!</Button>
        <Button appearense="secondary">Click me!</Button>
      </main>
      <footer className="app-footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
