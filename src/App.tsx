
import Header from './StaticLayout/Header/Header';

import Navigation from './Components/Navigation/Navigation';

import './App.scss';
import Button from './Components/Button/Button';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <MainPage/>
      </main>

      <footer className="app-footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
