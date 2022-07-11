import '../../css_components/Styles/AddActivity.css'
import React,{ useState } from "react";
import { postActivity, findCountries_N } from "../../redux/actions";
import { useDispatch,useSelector } from 'react-redux'
import { SelectedCountries, AddCountries } from "./SeleccionarPais";
import { useHistory } from 'react-router-dom';


export default function NewActivity() {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const paisesN = useSelector((state)=> state.countries),error = useSelector((state) => state.error)
    const [input, setInput] = useState({Nombre:'', Temporada:'',Dificultad:0 , Duracion:'',Paises:[]})
    const [renderpais, setRenderPais] = useState(false)

    const BuscarPais= (e) =>{
        e.preventDefault()
        if(!e.target.value) setRenderPais(false)
        else setRenderPais(true)
        dispatch(findCountries_N(e.target.value,""))
      
        
    }
    const handleChange = (e)=>{
        e.preventDefault()
        switch (e.target.name) {
            case 'Eliminar':
                setInput({...input, Paises: input.Paises.filter(c => c !== e.target.value)})
                break;
            case 'Nombre':
                setInput({...input, Nombre: e.target.value})
                break;
            case 'Paises':
                setInput({...input, Paises: [...input.Paises, e.target.value]})
                break;
            default: setInput({...input, [e.target.name]: e.target.value })
               
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()


        
      
        if(input.Nombre && input.Temporada && input.Dificultad && input.Duracion && input.Paises.length){
          /* if(typeof(input.Nombre.value)=== 'string'){ */
          
          dispatch(postActivity(input))
          alert('La actividad fue creada con exito!!')
          setInput({Nombre: '', Temporada: '', Dificultad: 0, Duracion: '', Paises: []})
          e.target.reset();
          history.push('/home')
            
          /* }else{alert('Error Nombre no puede ser un numero')}  */
        }else {alert('Complete los campos indicados')} 
    }

      return (
        <div className='create_activity_container'>
    
          <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
    
              <div className='create_activity_options' >
                
                <p className='title'>Crear Actividad</p>
                
    
                <div>
                <label>Nombre </label>
                <input className='searcher_container' type='text' name='Nombre' placeholder='nombre de actividad...' pattern="[A-Za-z ,.'-]{3,30}"  value={input.Nombre} onChange={(e) => handleChange(e)}/>
                </div>
    
                <div>
                <label>Temporada </label>
                <select className='options_container' defaultValue={""} name='Temporada' onChange={(e) => handleChange(e)}>
                  <option value="" disabled hidden>Seleccione temporada</option>
                  <option value={'Verano'}>Verano</option>
                  <option value={'Otoño'}>Otoño</option>
                  <option value={'Invierno'}>Invierno</option>
                  <option value={'Primavera'}>Primavera</option>
                </select>
                </div>
    
                <div>
                <label>Dificultad </label>
                <select className='options_container' defaultValue={""} name='Dificultad' onChange={(e) => handleChange(e)}>
                  <option value="" disabled hidden>Seleccione Dificultad</option>
                  <option value={1}>Principiante</option>
                  <option value={2}>Aficionado</option>
                  <option value={3}>Intermedio</option>
                  <option value={4}>Avanzado</option>
                  <option value={5}>Experto</option>
                </select>
                </div>
    
                <div>
                <label>Duracion </label>
                <input className='searcher_container' type='text' name='Duracion' placeholder='  En horas...' required pattern='[0-9]{0,2}' value={input.Duracion} onChange={(e) => handleChange(e)}/>
                </div>
              </div>
              
    
              <nav className='select_countries_container'>
    
                  <div>
                    <div className='search_container'>
                      <label className='label_search'>Paises: </label>
                      <input type='search' placeholder=' Buscar...' onChange={(e) => BuscarPais(e)}/>
                    </div>
                  </div>
    
                  <div>
                    <div className='selectedCountries'>
                      <label>Selecionar Pais </label>
                    </div>
                  </div>
    
                  <div>
                    <button className='submit_buttom' type='submit'>Crear</button>  
                  </div>
                  
              </nav>
    
              <div className='ContainRenders'>
                <div className='RenderCountries'>
                  {error.message? <></> 
                  : <AddCountries renderpais={renderpais} Paises={paisesN} input={input} handleChange={handleChange}/>}
                </div>
    
                <div className='RenderSelectedCountries'>
                  {!input.Paises.length? <></>
                  : <SelectedCountries input={input} handleChange={handleChange}/>}
                </div>
              </div>
       
          </form>
        </div>
      )
    };
    
