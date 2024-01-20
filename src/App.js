import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6dbe48c9"

function App() {

  const [searchTerm, setSearchTerm] = useState ("")
  const [movies, setMovies] = useState([])
  
  useEffect(()=>{
    searchMovies("Batman")
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch('${API_URL}$s=${title}')
    const data = await response.json()

    setMovies(data.Search)
  }

  return (
    <div className="App">
      <div className='search'>
        <input value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder='Search Movie '/>
        <img
        src=''
        alt='search'
        onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
  )}
    </div>
  );
}

export default App;
