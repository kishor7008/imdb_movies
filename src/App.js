
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header/Header';
import Home from './component/Header/Page/Home';
import Movie from './component/moviedetails/Movie';
import MovieList from './component/movieList/MovieList';
function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:id" element={<Movie/>}></Route>
      <Route path="/movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>error</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
