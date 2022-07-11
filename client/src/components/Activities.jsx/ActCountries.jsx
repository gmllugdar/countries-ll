import '../../css_components/Styles/paises_act.css';
import { findCountries_A , findActivity, deleteAct } from "../../redux/actions";
import CardCountries from "../Home/CardCountries";
import { useDispatch , useSelector} from 'react-redux'
import React, {useEffect,useState} from "react"
import { useHistory } from 'react-router-dom';

export default function ActCountries(props) {
    let history = useHistory()
    const dispatch = useDispatch()
    const {activity} = props.match.params
    let [cargando, setCargando]= useState(true)
    const paises = useSelector((state)=> state.countries )
    var actividad = useSelector((state)=> state.details)
    function eliminar(){
        dispatch(deleteAct(activity))
        history.push('/home')  
    }
    function atras() {
        history.push('/home')
    }
    useEffect(()=>{
       dispatch (findCountries_A(activity))
       setCargando(false)
    },[dispatch, activity])
    useEffect(()=>{
        dispatch (findActivity(activity))
        setCargando(false)
    },[dispatch])
    
    
    
    return (

       
            
            <div >
            {actividad?.map((e,i)=>{
                return<li  className='nav' key={i}>
                 <div className='navt' >
                     <button className='btnatra' onClick={()=>atras()}>Atras</button>   
                        <h1 className="titulo">{actividad[i].Nombre}</h1>
                     <button className='btnDelete' onClick={()=>eliminar()}>Elimianar</button>
                </div>
                <h4 className="atr">Dificultad:   {actividad[i].Dificultad}</h4>
                <h4 className="atr">Duracion:    {actividad[i].Duracion} Hrs</h4>
                <h4 className="atr">Temporada:   {actividad[i].Temporada}</h4>
                    
                </li> } )}
                    
                    
                    
                    
            
            {paises?.map((country, id)=>{
               return <li className='cardp' key={id}><CardCountries Id={country.Id} Nombre={country.Nombre} Bandera={country.Imagen} Continente= {country.Continente}/> </li>
            })}
        </div>
    )
}

