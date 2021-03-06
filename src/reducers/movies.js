import { FETCH_MOVIES_FULFILLED,FETCH_MOVIES_REJECTED,FETCH_MOVIES_PENDING } from '../actions/movies';


const initialState = {
    fetching : false,
    movies : [],
    error : {}
}
export default (state = initialState,action) => {
    switch(action.type){
        case FETCH_MOVIES_FULFILLED :
            return {
                ...state,
                movies : action.payload,
                fetching : false
            }
        case FETCH_MOVIES_REJECTED : 
            return {
                ...state,
                error : action.payload,
                fetching : false
            }
        case FETCH_MOVIES_PENDING :
            return {
                ...state,
                fetching : true
            }
        default :
            return state;
    }
}