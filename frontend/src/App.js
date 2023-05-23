import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Categories from './pages/Categories.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

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
            <Route
              path='/login'
              element={<Login />} />
            <Route
              path='/signup'
              element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
