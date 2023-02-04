import React from "react";
import NavList from "./ComponentsHeader/NavList";
import ContainerLogin from "./ComponentsHeader/Login";
import ContentHeder from "./ComponentsHeader/HeaderContent";
import logo from '../Images/logo.svg';
import "../App.css";
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt='logo' />
        <NavList />
        <ContainerLogin />
      </div>
      <ContentHeder />
    </header>
  );
};
export default Header;
