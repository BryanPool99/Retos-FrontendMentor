import React from 'react';
import logo from '../Images/logo.svg';
import NavList from "./ComponentsHeader/NavList";
const Footer=()=>{
    return (
        <footer>
            <img src={logo} alt='logo' />
            <div>
                <NavList />
            </div>
        </footer>
    )
}
export default Footer;