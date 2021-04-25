import React from 'react'
import logo from '../images/Logo.png';
import Close from '../images/Close.png';
import Resize from '../images/Resize.png';
import Minimize from '../images/Minimize.png';

function Nav() {
    return (
        <div className="mt-3">
            <p className="text-white d-inline ml-5">
                <img src={logo} alt="" width="19" height="23" /> cySync 
            </p>
            <div className="float-right mr-5">
                <img src={Minimize} alt="" width="16" height="1" className="ml-4" />
                <img src={Resize} alt="" width="16" height="16" className="ml-4" />
                <img src={Close} alt="" width="16" height="16" className="ml-4" />
            </div>
        </div>
    )
}

export default Nav
