import React from 'react';
import logo from './logo.svg';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import { Outlet } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
