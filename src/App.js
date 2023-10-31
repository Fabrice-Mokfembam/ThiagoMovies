import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Genre from './components/genre/genre'
import Search from './components/search/search';
import Movies from './components/movies/movies';
import MovieDetails from './components/MovieDetails/movieDetails';

function App() {
  const [searchValue, setSearchValue] = useState('');


  function handleInput(e) {
        setSearchValue(e.target.value);
   }
  return (
    <div className="App">
      <div className='Main_container'>
        <Routes>
          <Route path='/' element={
            <>
               <Header />
               <Hero />
               <Genre />
               <Search handleInput={handleInput} searchValue={ searchValue} setSearchValue={setSearchValue} />
               <Movies searchValue={searchValue} />
            </>
          }/>
             
          <Route path='/movieDetails' element={ 
            <MovieDetails/>
          } />
          
       </Routes>
      </div>      
    </div>
  );
}

export default App;
