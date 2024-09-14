import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/oraahome.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>

        <h1> ORA CORE</h1>
        
        <p> ORAAA FOR YOU</p>
        <Link to="/services">
          <button> Services</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
