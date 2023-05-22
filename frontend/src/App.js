import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Categories from './pages/Categories.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home />} />
            <Route
              path='/category/:category'
              element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
