import './App.css';
import { Routes,Route } from 'react-router';
import { Home } from './Pages/Home/home';
import { SearchPage } from './Pages/Search/searchPage';
import { Navbar } from './Components/Navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
