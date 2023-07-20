//file to hold reducers in the app
import { DECK

 } from "../actions/types";
 import fetchStates from "./fetchStates";

const DEFAULT_DECK = {
    gameStarted: false,
    instructionsExpanded: false
}

//this is called!
const deckReducer = (state = DEFAULT_DECK, action) => {
    
    console.log('state',state, 'action', action)
        //switch cases

    switch(action.type) {
            //make another case, for gettign the fetch deck results back
         case DECK.FETCH_SUCCESS:
            const {remaining, deck_id} = action //this destrcutres the action parameter. THis is needed since action will have various things
            return {...state, 
                    remaining, 
                     deck_id,
                    fetchState: fetchStates.success};   
         case DECK.FETCH_ERROR:
            return {... state,
                 message: action.message,
                fetchState: fetchStates.error};
            default:
                return state
    }
};

export default deckReducer;


