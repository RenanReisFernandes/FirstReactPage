import './Navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery'
import { useEffect } from 'react';
import nova_logo from '../../img/nova_logo.png'


const Navbar = () => {

   return(
    
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
      <img src={nova_logo}/>
          Nova Viagens
          
      </NavLink>

      <button className=
      "navbar-toggler" 
      

      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>          
      </button>

      <div className=
      "collapse navbar-collapse"
      id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                  <div className="left"></div>
                  <div className="right"></div>
              </div>

              <li className="nav-item active">
                  <NavLink className="nav-link"
                  to="/" exact>
                      <i
                      className="fas
                      fa -tachometer-alt">Home</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/company" exact>
                      <i
                      className="far
                      fa -address-book">Sobre nós</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/destinos" exact>
                      <i
                      className="far
                      fa -clone">Destinos</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/promocoes" exact>
                      <i
                      className="far
                      fa -chart-bar">Promoções</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/login" exact>
                      <i
                      className="far
                      fa -clone">Login</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/cadastro" exact>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/viagens" exact>
                      <i
                      className="far
                      fa -clone">Cadastrar viagens</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/contact" exact>
                      <i
                      className="far
                      fa -clone">Contato</i>
                  </NavLink>
              </li>

              <li className="nav-item">
                  <NavLink className="nav-link"
                  to="/cadastradas" exact>
                  </NavLink>
              </li>

          </ul>
      </div>

  </nav>


    
   ) 
}

export default Navbar