import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './Header.css'
import Logo from '../../images/logo.png'

function Header() {
    return (
      <>
        <header class="header">
        <section class="header__container">
            <div class="header__logo">
              <Link to="/"><img src={Logo} alt="" aria-label="" /></Link>
            </div>
        </section>
        </header>
      </>
    );
  }
  
  export default Header;
  