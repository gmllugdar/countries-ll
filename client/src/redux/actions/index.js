import axios from 'axios'
export const GET_COUNTRY = 'getcountry'
export const GET_ACTIVITIES = 'getactividades'
export const FIND_COUNTRIES_NAME = 'findcountriesN'
export const FIND_COUNTRIES_CONT = 'findcountriesC'
export const FIND_COUNTRIES_ACT = 'findcountriesA'
export const FIND_COUNTRIES = 'findcountries'
export const ERROR_SEARCH = 'errorSearch'
export const FIND_ACTIVITY = 'findActivity'
export const DELETE = 'delete'

export function getCountries(){
  return async(dispatch)=>{ 
  let result= await axios(`/countries`)
    console.log(result.data)
   return dispatch({type: FIND_COUNTRIES, payload: result.data})
   }
}
export function findCountries_N(Nombre){
  return async(dispatch)=>{ 
  let result= await axios(`/countries?name=${Nombre}`)
  if(Array.isArray(result.data)) return dispatch({type: FIND_COUNTRIES_NAME, payload: result.data})
  return dispatch({type: ERROR_SEARCH, payload: result.data})
   }
}
  
export function getCountry(id) {
    return async(dispatch)=>{
         var result = await axios.get(`/countries/${id}`)
       return   dispatch({type:GET_COUNTRY, payload:result.data})
     }
 }
 export function getActivities() {
   return async(dispatch)=>{
        var result = await axios.get(`/turismo`)
        return dispatch({type:GET_ACTIVITIES , payload:result.data})
   }
 }
 export function postActivity(data) {
   console.log(data)
   return async ()=>{
       await axios.post(`/turismo/create`,{...data})
   }
 }
 export function findCountries_C(continent) {
  return async(dispatch)=>{
    var result = await axios.get(`/countries?continent=${continent}`)
    return dispatch({type:FIND_COUNTRIES_CONT, payload:result.data})
}
 }
 export function findCountries_A(activity) {
  return async(dispatch)=>{
    var result = await axios.get(`/turismo/paises?activity=${activity}`)
    return dispatch({type:FIND_COUNTRIES_ACT , payload:result.data})
 }
}
export function findActivity(activity) {
  return async(dispatch)=>{
    var result = await axios.get(`/turismo/nombre?nombre=${activity}`)
    return dispatch({type:FIND_ACTIVITY , payload:result.data})
 }
}
export function deleteAct(nombre) {
  return async() => {
    return await axios.delete(`/turismo/delete?nombre=${nombre}`)
  }
}