import '../../css_components/Styles/Home.css'
import React, { useEffect,useState } from "react";
import CardCountries from "./CardCountries";
import { getCountries, findCountries_C, findCountries_N, getActivities} from "../../redux/actions";
import {useDispatch,useSelector} from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import Paginado from "./Paginado";




export default function Home() {

const history = useHistory()  
const dispatch = useDispatch()
const [cargando, setCargando] = useState(true)
const [orden, setOrden] = useState({orden: "ASC", by: "Nombre"})
const paises = useSelector((state)=>state.countries)
const error = useSelector((state)=>state.error)
const actividades = useSelector((state)=>state.activities)
  

//PAGINADO
const [pagina, setPagina] = useState(1)
const [paisXpag, setpaisXpag] = useState(9)
const siguiente = pagina * paisXpag
const anterior = siguiente - paisXpag 
var mostrar = paises.slice(anterior,siguiente) 
mostrar = SortCountries(mostrar, orden)


const actualPagina = (paginaNumero) => { 
  if (paginaNumero === 1) {
    setpaisXpag(9)
  }else{setpaisXpag(10)}
    
    setPagina(paginaNumero)
}
const BuscarPais= (e) =>{
   dispatch(findCountries_N(e.target.value))
}
const filtroContinente = (e) =>{
  setPagina(1)
  dispatch(findCountries_C(e.target.value))
}
const ordenTipo = (e)=> {
  
  e.preventDefault()
  
  setOrden({...orden, [e.target.name]: e.target.value})
  
}
const ActPais = (e)=>{
  let activity = e.target.value
  history.push(`/home/activity/${activity}`)
}

useEffect(() => {
    dispatch(getCountries())
    setCargando(false)
  }, [dispatch])
  useEffect(()=>{
  dispatch(getActivities())
  setCargando(false)
},[dispatch])

return (
    
        <React.Fragment>
          <div className='ContainHome'>
            
             <div>
              <Link to={'/home/create'}>
                <button className='create_buttom' >Crear Actividad</button>
            </Link>
            
            
            <div className='select_container'>
              <div className='select'>

                  <label className='label'>Tipo de Orden:</label>
                  <select className="filters" defaultValue={'ASC'} name='order' onChange={(e) => ordenTipo(e)}>
                      <option value={'ASC'}>Ascendente</option>
                      <option value={'DESC'}>Descendente</option>
                  </select>

              </div>

              <div className='select_1'>
              <label className='label'>Orden Por:</label>
                  <select className="filters" defaultValue={"Nombre"} name='by' onChange={(e) => ordenTipo(e)}>
                      <option value={'Nombre'}>Nombre</option>
                      <option value={'Poblacion'}>Poblacion</option>
                  </select>

               </div>
            </div>
           
            
            <div className='container'>
              <input className='searcher' placeholder=  '   Buscar Pais....' type='search' onChange={(e) => BuscarPais(e)}/>
            </div>

           
                <div>
                <div className='select_container'>
               <div className='select_2'>

                   <label className='label1'>Filtro Por Continente: </label>
                   <select className="filters" onChange={(e) => filtroContinente(e)}>
                       <option value={""}>Todos Los continentes</option>
                       <option value={'Africa'}>Africa</option>
                       <option value={'America'}>America</option>
                       <option value={'Antarctica'}>Antarctica</option>
                    <option value={'Asia'}>Asia</option>
                       <option value={'Europe'}>Europa</option>
                       <option value={'Oceania'}>Oceania</option>
                   </select>

               </div>
            </div>
                <label className='label1'>Filtro Por Actividades: </label>
                <select className="filters" defaultValue={''} onChange ={(e)=> ActPais(e)} >
                    <option value={''}>Todas las Actividades</option>
                    {actividades?.map((activity,i)=>{ 
                        return <option key={i}  value={activity}> {activity}  </option>
                        }
                    )}
                </select>
            </div>
             </div>
          
            
            <div  className='actual_countries'>
                <Paginado paisXpag={paisXpag} paises={paises} pagina={pagina} actualPagina={actualPagina}/>
            {mostrar?.map((e,index)=> {
              
              
            return (<div className='card' key={index}> <CardCountries Id={e.Id} Nombre={e.Nombre} Bandera={e.Imagen} Continente= {e.Continente} /> </div>)
           
            })}
            </div>

           
          </div>  
        </React.Fragment>
    
)
}
export function SortCountries(countries, {order, by}) {
  switch(order){
    case 'DESC':
      return (by === 'Nombre' || by === 'Id' || by === 'continent') 
      ? countries.sort((a,b) => b[by].localeCompare(a[by])) 
      : countries.sort((a,b) => a[by] - b[by]) // DESCENDENTE de menor a mayor
      
    default: 
      return (by === 'Nombre' || by === 'Id' || by === 'continent') 
      ? countries.sort((a,b) => a[by].localeCompare(b[by])) 
      : countries.sort((a,b) => b[by] - a[by]) // ASCENDENTE de mayor a menor
  }
}