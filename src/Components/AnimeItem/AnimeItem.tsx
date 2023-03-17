import {AiFillStar} from 'react-icons/ai';

import './animeItem.scss';

import anime from '../../assets/anime-title.jpg';

const AnimeItem = () => {
  return (
    <article className="anime-item">
      <img
        className="anime-item__image"
        src={anime}
        alt="anime"
      />

      <h3 className="anime-item__title">
        Reincarnation of uncle from another world
      </h3>

      <p className="anime-item__info">2022</p>

      <div className="anime-item__rating">
        <p>9.3</p>
        <AiFillStar className="anime-item__start" />
      </div>
    </article>
  );
}
 
export default AnimeItem;