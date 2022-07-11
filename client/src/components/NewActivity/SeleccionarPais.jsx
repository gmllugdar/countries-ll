
import React from "react";

export function AddCountries({input, handleChange, Paises, renderpais}){

    return (
        <div>
            <div className="containerCountries">
                {renderpais 
                ? (Paises?.map((country, i) => (
                    <li key={`add ${i}`}>
                        <p>{country.Nombre}</p>
                        <div className='button_container'>
                        <button className='add_button' name='Paises' value={country.Nombre} type='button' onClick={(e) => {  
                            Paises.splice(i, 1)
                            if(!input.Paises.includes(e.target.value)) handleChange(e)
                        }}>+</button>
                         
                        </div>
                    </li>
                ))) 
                : <></>}
            </div>
        </div>
    )
}

export function SelectedCountries({input, handleChange}){

    return (
        <div className="containCountries_remove">
            <div className='countries_remove'>
                {input.Paises.map((country,i) => (
                    <li key={`selected ${i}`}>
                        <p>{country}</p>
                        <div className='button_container_remove'>
                        <button className='remove_button' type='button' name='Eliminar' value={country} onClick={(e) => handleChange(e)}>-</button>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

