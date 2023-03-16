import {NavigationProp} from './Navigation.prop';

import {NavLink} from 'react-router-dom'

import './navigation.scss';

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Anime', path: '/anime'},
  {title: 'Random anime', path: '/random-anime'},
  {title: 'About the project', path: '/about'},
];

const Navigation = ({children}: NavigationProp) => {

  return (
    <nav className="navigation">
      {navLinks.map(({title, path}) => (
        <a
          className="navigation__link"
          key={title}
          href={path}
        >
          {title}
        </a>
      ))}
      <a
        className="navigation__link"
        href="#"
      >
        Genres
      </a>
    </nav>
  );
};

export default Navigation;
