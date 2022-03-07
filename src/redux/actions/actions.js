import { NAV_BAR_ROUTE_HIGHLIGHT } from '../constants/actionTypes';

export function navBarRouteHighlight(currentRoute){
    return {
        type : NAV_BAR_ROUTE_HIGHLIGHT,
        route : currentRoute
    }
}