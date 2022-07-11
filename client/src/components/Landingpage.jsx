import '.././css_components/Styles/LandingPage.css'
import React from "react";
import {Link} from 'react-router-dom'

export default function Landingpage() {
    return (
        <div className='LandingContainer'>
            <div id='earth'>
            <Link id='LinkHome' to='/home'> INGRESAR
            
            </Link>
            </div>
        </div>
    )
}