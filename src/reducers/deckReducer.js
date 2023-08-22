//file to hold reducers in the app
import { DECK, DECK_DRAW

 } from "../actions/types";
 import fetchStates from "./fetchStates";

const DEFAULT_DECK = {
    gameStarted: false,
    instructionsExpanded: false
}

//this is called!
const deckReducer = (state = DEFAULT_DECK, action) => {
    
    let remaining, deck_id, cards; //declare this to be used with other actions??
    
        //switch cases

    switch(action.type) {
            //make another case, for gettign the fetch deck results back
         case DECK.FETCH_SUCCESS:
         ({remaining, deck_id} = action) //this destrcutres the action parameter. THis is needed since action will have various things
            return {...state, 
                    remaining, 
                     deck_id,
                    fetchState: fetchStates.success};   
         case DECK.FETCH_ERROR:
            return {... state,
                 message: action.message,
                fetchState: fetchStates.error};
        case DECK_DRAW.FETCH_SUCCESS:
                ({cards, remaining} = action);
            return {...state, 
                message: action.message, 
                cards,
                remaining,
                fetchState: fetchStates.success,
            }
        case DECK_DRAW.FETCH_ERROR:
            return {...state, message: action.message, fetchState: fetchStates.error}
            default:
                return state
    }
};

export default deckReducer;


