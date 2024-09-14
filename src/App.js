import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
      <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
     
      </Routes>
      <Footer/>
      </Router>
      </div>
  
    );
  }

export default App;

