import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteComponent from './components/QuoteComponent';
import HomePage from './components/HomePage';
import './styles/NavBar.css';

const Display = () => (
  <div>
    <div className="NavBarContainer">
      <h1>Math Magicians</h1>
      <nav className="NavBar ul">
        <Link to="/" className="li">HomePage</Link>
        <Link to="/calculator" className="li">Calculator</Link>
        <Link to="/quotes" className="li">QuoteComponent</Link>
      </nav>
    </div>
    <Outlet />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Display />}>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<QuoteComponent />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
