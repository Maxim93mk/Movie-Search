import './App.css';
import MainPage from '../../pages/main-page/MainPage';
import MoviePage from '../../pages/movie-page/MoviePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<MainPage/>}></Route>
        <Route  path='/movie' element={<MoviePage/>}></Route>
      </Routes>
    </Router>
      {/* <MainPage /> */}
      {/* <MoviePage/> */}
    </>
  );
}

export default App;
