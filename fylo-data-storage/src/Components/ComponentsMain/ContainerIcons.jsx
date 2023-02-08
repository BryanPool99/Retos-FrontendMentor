import React from 'react';
import logo from '../../images/logo.svg';
import iconDocument from '../../images/icon-document.svg';
import iconFolder from '../../images/icon-folder.svg';
import iconUpload from '../../images/icon-upload.svg';
const ContainerIcons=()=>{
    return(
        <section className='containerIcons'>
            <figure>
                <h1><img src={logo} alt="logo"/></h1>
            </figure>
            <div>
                <figure className='bgIcon'>
                    <img src={iconDocument} alt="logo"/>
                </figure>
                <figure className='bgIcon'>
                    <img src={iconFolder} alt="logo"/>
                </figure>
                <figure className='bgIcon'>
                    <img src={iconUpload} alt="logo"/>
                </figure>
            </div>
        </section>
    )
}
export default ContainerIcons;
