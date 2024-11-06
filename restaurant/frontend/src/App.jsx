import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
      <Router>
        <header className="bg-emerald-950 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Le Gourmet Voyageur</h1>
            <div className="flex space-x-4">
              <Link to="/" className="hover:underline">Accueil</Link>
              <Link to="/menu" className="hover:underline">Menu</Link>
              <Link to="/orders" className="hover:underline">Commandes</Link>
              <Link to="/profile" className="hover:underline">Profil</Link>
              <Link to="/login" className="hover:underline">Connexion</Link>
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
