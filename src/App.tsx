import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import charityFinder from "./assets/charityFinder.png";
import HomePage from "./routes/HomePage";
import CharityDetailPage from "./routes/CharityDetailPage";
import FavoritesPage from "./routes/FavoritesPage";
import NotFoundPage from "./routes/NotFoundPage";
import SearchResultPage from './routes/SearchResultPage';
import Search from './components/Search';
import CharityDetail from './components/CharityDetail';

const Navigation = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="flex bg-navColor gap-60 w-screen py-5 items-center justify-evenly">
        <Link to = "/" className='text-3xl font-semibold flex gap-1 text-white hover:text-hover cursor-pointer'>
          <img src={charityFinder} width={40} height={40}/>
          Charity Finder
        </Link>
        <Search searchText={searchText} onChangeText={(e) => setSearchText(e.target.value)}/>
        <Link to = "/favourite" className='text-3xl text-white hover:text-hover cursor-pointer'>Favourites</Link>
      </div>
      <Outlet />
    </div>
  )
}


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="search/:cause" element={<SearchResultPage />} />
          <Route path="charity" element={<CharityDetailPage />} />
          <Route path="charity/:ein" element={<CharityDetail />} />
          <Route path="favourite" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

// API key = pk_live_731b1c4465b48be8bb82261aa296059e