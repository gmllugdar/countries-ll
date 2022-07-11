import {FIND_ACTIVITY,FIND_COUNTRIES, GET_COUNTRY,GET_ACTIVITIES,FIND_COUNTRIES_NAME, FIND_COUNTRIES_CONT, FIND_COUNTRIES_ACT } from "../actions";

const initialState = {
    countries: [], 
    details: [],
    activities:[],
    error: {}
}
export default function rootReducer(state = initialState, action){

    switch (action.type) {
        case FIND_COUNTRIES: case FIND_COUNTRIES_ACT : case FIND_COUNTRIES_NAME: case FIND_COUNTRIES_CONT:
            
           return {countries: [...action.payload], details: [], error: {}} 
        case GET_COUNTRY: case FIND_ACTIVITY:

           return{
            ...state,
            details: action.payload
           }
        case GET_ACTIVITIES:  
            return{
                ...state,
                activities: action.payload.map(x => x.Nombre)
            }
        default: return {...state}
    }
}