import React from "react";
import { getCountry } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetails from './CardDetails' 

export default function Details(props) {
  
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    const id = props.match.params.id

    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch, id])


    return (
        <div>
            {details?.map((e,i)=>{
                return ( <div key={i}> <CardDetails Nombre= {e.Nombre} Imagen={e.Imagen} Capital={e.Capital} Continente={e.Continente} Subregion={e.Subregion} Area={e.Area} Poblacion={e.Poblacion} Actividades={e.Act_Turs} /> </div>)
            })}

        </div>
    )
}
