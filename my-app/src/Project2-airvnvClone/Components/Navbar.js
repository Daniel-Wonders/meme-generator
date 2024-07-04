import React from 'react';

export default function Navbar(){
    return(
        <div>
            <nav>
                <img className='icon' src={process.env.PUBLIC_URL+"/arivnvClone-assets/logo.png"} />
            </nav>
            
            <div className='container1'>
                <img className='mainImage' src={process.env.PUBLIC_URL+"/arivnvClone-assets/photo-grid.png"}/>
                <h1>Online experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts, all without leaving home</p>

            </div>
        </div>
    )
}