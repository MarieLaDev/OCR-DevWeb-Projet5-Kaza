import React from 'react';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import { Outlet } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
