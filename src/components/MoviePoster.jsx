import { Dot } from 'lucide-react';
import starIcon from '../assets/star.svg';

const MoviePoster = ({ title, poster, date, language, rating }) => {
  return (
    language !== 'hi' && (
      <div className='bg-secondary-900 relative flex max-w-xs flex-col gap-2 rounded-2xl p-4 text-white'>
        <img
          className='h-auto w-full rounded-xl'
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
        />
        <div className='bg-secondary-900 absolute top-[30px] right-[30px] flex gap-2 rounded-full px-3 py-1'>
          <img
            src={starIcon}
            alt='Star Icon'
          />
          <span>{rating > 0 ? rating.toFixed(1) : 'N/A'}</span>
        </div>
        <h3 className='line-clamp-1'>{title}</h3>
        <div className='flex items-center gap-0.5'>
          <span>{date.split('-')[0]}</span>
          <span>
            <Dot size={24} />
          </span>
          <span className='uppercase'>
            {language === 'ja' ? 'JP' : language}
          </span>
        </div>
      </div>
    )
  );
};

export default MoviePoster;
