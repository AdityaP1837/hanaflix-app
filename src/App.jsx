import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Trending from './pages/trending/Trending'
import Browse from './pages/browse/Browse'
import Home from "./pages/home/Home";
import SearchResult from "./components/seachResult/SearchResult";
import WatchPage from "./pages/watchPage/WatchPage";

function App() {
	return (
		<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending/:time/:page" element={<Trending/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/browse/tags/:tag/:page" element={<h1>Browse Custom</h1>}/>
        <Route path="/watch/:slug" element={<WatchPage/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
      </Routes>
    </BrowserRouter>
	);
}

export default App;
