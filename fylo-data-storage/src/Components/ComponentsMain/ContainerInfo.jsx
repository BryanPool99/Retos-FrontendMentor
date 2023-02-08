import React from 'react';
const ContainerInfo=()=>{
    return(
        <section className='containerInfo'>
            <p>You’ve used <b>815 GB</b> of your storage</p>
            <div className='storage'>
                <div className='valueStorage'>
                    <div className='Circle'></div>
                </div>
            </div>
            <div className='range'>
                <p><b>0 GB</b></p>
                <p><b>1000 GB</b></p>
            </div>
            <div className='containerTooltip'>
                <div className='tooltip'><b>185</b> GB Left</div>
                <div className='triangle'></div>
            </div>
            
        </section>
    )
}
export default ContainerInfo;