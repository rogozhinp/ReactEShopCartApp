import {FETCH_PRODUCTS} from "../actions/types";

const initialState = { items:[]};
export default function(state=initialState, actions){
    switch(actions.type){
        case FETCH_PRODUCTS:
            return{...state, items: actions.payload};
        default:
            return state;
    }
}