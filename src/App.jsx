import { useEffect, useState } from 'react';

import axios from 'axios';
import Hero from './components/Hero';
import SearchBar from './components/searchBar';
import MoviePoster from './components/MoviePoster';
import Pagination from './components/Pagination';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesList, setMoviesList] = useState([]);

  const fetchMovies = async (page) => {
    const response = await axios.request({
      method: 'GET',
      url: `${API_BASE_URL}/discover/movie`,
      params: {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: page,
        sort_by: 'popularity.desc',
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    setMoviesList(response.data.results);
    setTotalPages(Math.min(response.data.total_pages, 50));
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <>
      <Hero />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <h2 className='mx-auto w-full md:text-center sm:max-w-3xl my-6 text-3xl font-black text-white'>Movies</h2>
      <div className='grid grid-cols-2 gap-5 sm:px-[5rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-[10rem]'>
        {moviesList.map((movie) => (
          <MoviePoster
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            date={movie.release_date}
            language={movie.original_language}
            rating={movie.vote_average}
          />
        ))}
      </div>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default App;
