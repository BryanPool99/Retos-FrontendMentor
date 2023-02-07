import React from "react";
import NavList from "./ComponentsHeader/NavList";
import ContainerLogin from "./ComponentsHeader/Login";
import ContentHeder from "./ComponentsHeader/HeaderContent";
import logo from '../Images/logo.svg';
import iconMenu from '../Images/icon-hamburger.svg';
import "../App.css";
import "../Css/Header.css"
const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={logo} alt='logo' />
        <div className="container-Nav_Login">
          <NavList/>
          <ContainerLogin />
        </div>
        
        <div className="iconMenu">
          <img src={iconMenu} alt='icon-menu'/>
        </div>
      </div>
      <ContentHeder />
    </header>
  );
};
export default Header;
