import Container from '../../Components/Container/Container';
import Login from '../../Components/Login/Login';
import Navigation from '../../Components/Navigation/Navigation';

import './header.scss';

const Header = () => {
  return (
    <header className="app-header">
      <Container>
        <div className="app-header__grid">
          <div>
            <h1>Anime Logo</h1>
          </div>
          <Navigation />
          <Login />
        </div>
      </Container>
    </header>
  );
}

export default Header;