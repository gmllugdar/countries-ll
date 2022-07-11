import '../../css_components/Styles/CardCountry.css'
import React from "react";
import { Link } from "react-router-dom";

export default function CardCountries({Nombre,Bandera,Continente,Id}) {
    return (
        <ul className="ContainCountries">
        <div className='ContainGrid'>
            <Link className='Link' to={`/home/details/${Id}`}>
            <div className='card'>
            <img height='200px' width='300px' src={Bandera} alt="img" />
            <p className='text'>{Nombre}</p>
            <p className='text'>Continente: {Continente}</p>
            </div>
            </Link>
        </div>
        </ul>
    )
}