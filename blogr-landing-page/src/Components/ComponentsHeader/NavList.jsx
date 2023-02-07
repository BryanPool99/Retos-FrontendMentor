import React from "react";
import iconArrowDown from '../../Images/icon-arrow-light.svg';
const NavList =()=>{
    const navTitle=["Product","Company","Connect"];
    const ProductoList=["Overview", "Pricing", "Marketplace", "Features", "Integrations"];
    const CompanyList=["About", "Team", "Blog", "Careers"];
    const ConnectList=["Contact","Newsletter","LinkedIn"];
    
    return (
        <nav>
            {navTitle.map((e)=>
                <p>{e}
                    <img src={iconArrowDown} alt="iconArrow"/>
                </p>
            )}
            <ul className="Prodlist">
                {ProductoList.map((Pli)=> <li key={Pli}>{Pli}</li>)}
            </ul>
            <ul className="CompList">
                {CompanyList.map((Cli)=> <li key={Cli}>{Cli}</li>)}
            </ul>
            <ul className="ConnecList">
                {ConnectList.map((Conli)=> <li key={Conli}>{Conli}</li>)}
            </ul>
            
        </nav>
        
    );
}
export default NavList;