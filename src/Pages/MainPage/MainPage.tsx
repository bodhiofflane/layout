import Container from '../../Components/Container/Container';
import Button from '../../Components/Button/Button';

import './mainPage.scss';

import anime from '../../assets/anime-title.jpg';
import AnimeItem from '../../Components/AnimeItem/AnimeItem';

const MainPage = () => {
  return (
    <Container>
      <div className="main-page">
        <h2 className="main-page__title">Most Popular</h2>
        <div className="main-page__anime-grid">
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
        </div>
        <h2 className="main-page__title">Ongoing</h2>
        <div className="main-page__anime-grid">
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
        </div>

        <h2 className="main-page__title">Upcoming</h2>
        <div className="main-page__anime-grid">
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
          <AnimeItem />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
