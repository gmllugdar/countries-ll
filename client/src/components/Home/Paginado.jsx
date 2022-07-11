import '../../css_components/Styles/Paginacion.css';
import React from "react";

export default function Paginado({paisXpag,paises,pagina,actualPagina}) {
    const pagN = []
    var x =4 , y=4
    const pagMax= Math.ceil(paises.length/paisXpag)


    for (let i = 0; i < pagMax; i++) {
        pagN.push(i+1)
        
    }
    function cambioPagina(pagina,v) {
        if(v>0){
        if(pagina < pagMax){pagina = pagina+1}
        else {pagina = 1}
       }else if(pagina > 1){pagina = pagina-1}
            else{
           pagina = Math.ceil(paises.length/10)
       }
       actualPagina(pagina)
    }
    return (
        <nav className='wrapper'>
            <ul className="paginationContain">
                <button className='buttom' onClick={()=> cambioPagina(pagina,0)}>Anterior</button>
                {pagN && pagN.map(num => {
                    let min= pagina - y;
                      let max= pagina + x;
                      if(pagina === 2 || pagina=== 3|| pagina === (pagMax -2)){
                           if (pagina === 2) {
                               x = 6
                           }else if(pagina === (pagMax -2)){
                           y = 5
                        }else{
                            x= 5
                        }
                        }else if(pagina === 1 || pagina === pagMax|| pagina === (pagMax -1)){
                           if (pagina === 1) {
                               x = 7
                           } else if (pagina === pagMax) {
                                y = 7
                           }else {
                               y= 6
                           }
                           
                        }
                    if (num > min && num < max ) {
                        
                        return (
                        <li key={num}>   
                                    <a onClick={()=> actualPagina(num) } className="PageNum">{num}</a>   
                        </li>
                    )
                    }
                    
                 
                })}
                
                
                <button className='buttom' onClick={()=> cambioPagina(pagina,1)}>Siguiente</button>
            </ul>
             <span className='Page' >{`Pagina ${pagina}`}</span>
        </nav>
    )
    
}





















































































