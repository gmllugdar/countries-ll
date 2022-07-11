import '../../css_components/Styles/Details.css'
import React from "react";
import { Link } from 'react-router-dom';




export default function CardDetails({Nombre,Imagen,Capital,Continente,Subregion,Area,Poblacion,Actividades}) {
    return (
            
        <div> <Link to={'/home'} className='btnatras'  > Volver </Link>
    <div className="bigger_container">
        
        <div className="details_container">
            
            <img src={Imagen} height='200px' width='350px' alt='img'/>
            <div className="details_small_container">
            <h2 className='tituloN'>{Nombre}</h2>
            <p>Capital: {Capital}</p>
            <p>Continente:{Continente}</p>
            <p>Subregion: {Subregion}</p>
            <p>Area: {Area} km²</p>
            <p>Poblacion: {Poblacion}</p>
            </div>
        </div>
        <div className='activity_container'>
            <div className="activity_details">
            {Actividades?.map((e,i)=>{
                return (
                    <li key={i}>
                        <h3 className='tituloN'>Actividades</h3>
                        <p >Nombre: {e.Nombre}</p>
                        <p>Temporada: {e.Temporada}</p>
                        <p>Dificultad: {e.Dificultad}</p>
                        <p>Duracion: {e.Duracion} Hrs</p>
                    </li>
                )
            })}
            </div>
        </div>
        </div>
   </div> )
}