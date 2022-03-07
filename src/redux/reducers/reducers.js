import { NAV_BAR_ROUTE_HIGHLIGHT } from '../constants/actionTypes';

const  intialState ={
    route : '/'
};

function rootReducer(state = intialState , action){
    switch(action.type){
        case NAV_BAR_ROUTE_HIGHLIGHT:
            return {
                ...state,
                route : action.route
            }
        default:
            return state;
    }
}

export default rootReducer;
