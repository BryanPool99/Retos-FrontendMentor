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
                 <ul >{e}
                    <img src={iconArrowDown} alt="iconArrow"/>
                </ul>
            )}
            <div>
                {ProductoList.map((Pli)=> <li>{Pli}</li>)}
            </div>
            <div>
                {CompanyList.map((Cli)=> <li>{Cli}</li>)}
            </div>
            <div>
                {ConnectList.map((Conli)=> <li>{Conli}</li>)}
            </div>
            
        </nav>
        
    );
}
export default NavList;