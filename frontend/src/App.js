import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Categories from './pages/Categories.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import { useAuthContext } from './hooks/useAuthContext.js';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/todo'
              element={user ? <Home /> : <Navigate to="/login" />} />
            <Route
              path='/category/:category'
              element={user ? <Categories /> : <Navigate to="/login" />} />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/todo" />} />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to="/todo" />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
