import React, {useState} from 'react';
import Logo from '../assets/Oracore.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { Button } from '@mui/material';

function Navbar() {
  
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = ()=> {;
  setOpenLinks(!openLinks)
  };

  return (

    <div className="navbar">

      <div className="leftSide" id={openLinks ? "open" : "close"}>   
        <img src={Logo} alt="Logo" />
        <div className ="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Button onClick = {toggleNavbar}> <ReorderIcon/>
        </Button>
        </div>
    </div>


  );
}

export default Navbar;
